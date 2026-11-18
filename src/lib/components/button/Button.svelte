<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { type ButtonStyleProps, getButtonClass } from './buttonStyles.ts';
	import './button.css';
	import { getKeyboardManager } from '#lib/util/keyboardManager.js';

	type Props = Omit<HTMLButtonAttributes, 'children'> &
		ButtonStyleProps & {
			children: Snippet;
			keyboardShortcut?: string | string[];
		};

	let {
		class: className,
		children,
		iconColor,
		size,
		buttonColor,
		keyboardShortcut = undefined,
		...props
	}: Props = $props();

	const buttonClass = $derived(
		getButtonClass({ class: className, size, buttonColor, iconColor })
	);

	let button = $state<HTMLButtonElement>();

	onMount(() => {
		if (!keyboardShortcut) {
			return;
		}

		const keyboardManager = getKeyboardManager();

		const shortcuts = Array.isArray(keyboardShortcut)
			? keyboardShortcut
			: [keyboardShortcut];

		const cleanupFunctions = shortcuts.map((key) =>
			keyboardManager.register({
				key,
				callback: () => {
					button?.click();
				}
			})
		);

		return () => {
			for (const cleanup of cleanupFunctions) {
				cleanup();
			}
		};
	});
</script>

<button bind:this={button} class={buttonClass} {...props}>
	{@render children()}
</button>

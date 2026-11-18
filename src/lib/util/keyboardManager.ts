import { getContext } from 'svelte';

export const KEYBOARD_MANAGER_CONTEXT = Symbol('keyboardManager');

export function getKeyboardManager() {
	return getContext<KeyboardManager>(KEYBOARD_MANAGER_CONTEXT);
}

type KeyboardShortcut = {
	key: string;
	callback: () => void;
};

export class KeyboardManager {
	private readonly registeredShortcuts = new Map<string, () => void>();

	public constructor() {}

	public register(shortcut: KeyboardShortcut) {
		this.registeredShortcuts.set(shortcut.key, shortcut.callback);

		// Return cleanup function
		return () => this.registeredShortcuts.delete(shortcut.key);
	}

	public handleKeyUp(event: KeyboardEvent) {
		const callback = this.registeredShortcuts.get(event.key);

		if (callback) {
			callback();
		}
	}
}

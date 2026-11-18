<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
	import { buttonVariants } from '#lib/shadcn/components/ui/button/index.ts';
	import { cn } from '#lib/shadcn/utils.ts';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: AlertDialogPrimitive.CancelProps = $props();
</script>

<AlertDialogPrimitive.Cancel
	class={cn(buttonVariants({ variant: 'outline' }), className)}
	data-slot="alert-dialog-cancel"
	bind:ref
	{...restProps}
/>

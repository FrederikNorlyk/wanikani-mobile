<script lang="ts">
	import type { SRSStage } from '#lib/util/srsStageUtil.js';

	interface Props {
		srsStage: SRSStage;
	}

	const { srsStage }: Props = $props();
</script>

<div class="mx-20 rounded-lg bg-green-100 p-2">
	<p class="text-center text-green-500">
		{srsStage}
	</p>
</div>

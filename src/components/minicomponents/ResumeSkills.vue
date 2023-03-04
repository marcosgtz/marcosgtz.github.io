<script setup>
	const props = defineProps({
		'percent': String,
		'skill': String
	});
</script>

<template>
	<div class="grid grid-cols-2 text-sm mb-4">
		<div class="font-bold text-left">
			{{ skill }}
		</div>
		<div class="text-right font-zinc-600 text-xs">
			{{ percent }}%
		</div>

		<div class="col-span-2 border rounded-full border-emerald-700 p-0.5 h-3">
			<div class="bg-emerald-700 h-full rounded-full" :style="{ 'width': percent + '%' }"></div>
		</div>
	</div>
</template>
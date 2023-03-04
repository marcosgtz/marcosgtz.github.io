<template>
	<div class="text-right text-zinc-500 pr-6 pt-6">
		<span class="font-bold">
			<slot name="date"></slot>
		</span>
		<br />
		<span class="text-xs">
			<slot name="place"></slot>
		</span>
	</div>
	<div class="col-span-2 border-l pl-6 pt-6 relative">
		<font-awesome-icon icon="fa-solid fa-circle" class="absolute -left-2 text-emerald-600" />
		<span class="font-bold">
			<slot name="title"></slot>
		</span>
		<br />
		<span class="text-zinc-300">
			<slot name="description"></slot>
		</span>
	</div>
</template>
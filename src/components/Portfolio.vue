<script setup>
	import { ref } from 'vue'
	import Siae from './portfolio/Siae.vue';
	import Docs from './portfolio/Docs.vue';

	const showSiae = ref( false );
	const showDocs = ref( false );
</script>

<template>
	<div class="text-white px-16 h-full overflow-hidden scrollbar-stable hover:overflow-y-scroll">
		<h1 class="text-3xl font-bold">
			Portfolio
		</h1>

		<Siae :show="showSiae" @close="showSiae = false" />
		<Docs :show="showDocs" @close="showDocs = false" />

		<div class="grid grid-cols-3 gap-8 mt-6">
			<div class="relative group cursor-pointer" @click="showSiae = true">
				<div class="hidden group-hover:flex absolute h-full w-full bg-slate-800/75 text-white text-3xl font-bold items-center justify-center">
					SIAE
				</div>
				<img src="/2019-siae01.jpg" class="w-full" />
			</div>
			<div class="relative group cursor-pointer" @click="showDocs = true">
				<div class="hidden group-hover:flex absolute h-full w-full bg-slate-800/75 text-white text-3xl font-bold items-center justify-center">
					Oficios
				</div>
				<img src="/2020-docs01.jpg" class="w-full" />
			</div>
		</div>
	</div>
</template>
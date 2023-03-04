<script setup>

	const emit = defineEmits(['close']);

	const props = defineProps({
		show: false
	});

	const close = () => {
		emit('close');
	}
</script>

<template>
	<div v-if="show" class="fixed w-full h-full bg-zinc-800 top-0 left-0 z-10 text-white overflow-auto">
		<div class="w-1/2 mx-auto pt-8">
			<div class="w-full text-right">
				<div class="cursor-pointer text-2xl text-center mt-2 bg-zinc-500 text-zinc-200 inline-block h-8 w-8" @click="close()">x</div>
			</div>
			<h1 class="font-bold text-white text-4xl">Docs</h1>

			<div class="grid grid-cols-3 gap-8 mt-6">
				<div class="col-span-2">
					<img class="" src="/2020-docs01.jpg" />
					<img class="my-5" src="/2020-docs02.jpg" />
					<img class="my-5" src="/2020-docs03.jpg" />
				</div>

				<div>
					<div class="bg-zinc-900 px-6 py-4">
						<h2 class="font-bold mb-4">Description</h2>

						<div class="my-2">
							<font-awesome-icon icon="fa-solid fa-earth-americas" class="text-emerald-600 mr-3" />
							<a class="text-blue-500 text-sm" href="https://docs.unach.mx" target="_blank">https://docs.unach.mx</a>
						</div>

						<div class="my-2">
							<font-awesome-icon icon="fa-solid fa-calendar" class="text-emerald-600 mr-3" />
							<span class="text-sm">November, 2019</span>
						</div>

						<p class="font-light">
							<br />
							Sistema para elaboración de oficios electrónicos con la finalidad de usar 0-papel. El sistema fue creación propia desarrollado de cero;
							implementa administración de usuarios, firma electrónica con validación de 2 entidades certificadoras (propia y SAT)
							generación de oficio en formato pdf o html, soporte para archivos adjuntos, añadir comentarios, asignación a otras
							áreas para su atención.
							<br /><br />
							Los diseños fueron elaborados y aplicados por su servidor.
						</p>

						<h2 class="font-bold my-6">Technology</h2>

						<div class="inline-block rounded bg-zinc-600 text-xs px-3 py-1 mr-1 my-1">PHP</div>
						<div class="inline-block rounded bg-zinc-600 text-xs px-3 py-1 mr-1 my-1">Oracle</div>
						<div class="inline-block rounded bg-zinc-600 text-xs px-3 py-1 mr-1 my-1">Jquery</div>
						<div class="inline-block rounded bg-zinc-600 text-xs px-3 py-1 mr-1 my-1">Bootstrap</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
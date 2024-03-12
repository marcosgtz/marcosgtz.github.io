<script setup>
	import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

	const currentYear = new Date( ).getFullYear( );
	const emit = defineEmits(['pageChange']);
</script>

<template>
	<div class="mt-3 px-2 xl:p-0 xl:mt-16 text-white">

		<div class="text-left xl:text-center">
			<img class="rounded-full w-12 shadow shadow-zinc-900 inline-block mt-1 float-left lg:float-none lg:w-36 lg:shadow-xl" src="https://lh3.googleusercontent.com/a/ACg8ocJ_3la05z7o7YDBW_0uSQL8vRoT618rPaCkiU6pI7FEeYQ=s288-c-no" />

			<div class="font-bold block text-md ml-3 mt-2 sm:inline-block xl:w-full">
				<div class="xl:text-4xl">Marcos Gtz.</div>

				<div class="text-zinc-300 text-md font-light">{{$t('main.profession')}}</div>
			</div>

		</div>

		<div class="mt-6 text-xl">
			<a class="mx-3 inline-block" title="linked in" href="www.linkedin.com/in/marcosgtz" target="_blank">
				<font-awesome-icon icon="fa-brands fa-linkedin-in" />
			</a>
			<a class="mx-3 inline-block" title="facebook" href="https://www.facebook.com/marcos.gtz.16/" target="_blank">
				<font-awesome-icon icon="fa-brands fa-facebook-f" />
			</a>
			<a class="mx-3 inline-block" title="twitter" href="https://twitter.com/MarcosG52811338" target="_blank">
				<font-awesome-icon icon="fa-brands fa-twitter" />
			</a>
			<a class="mx-3 inline-block xl:hidden" title="resume" href="https://docs.google.com/presentation/d/1iMBa9Af9Jto3aX_yRi4lnozM_UpAAaj2V3pXv8Dv23Q/?usp=sharing" target="_blank">
				<font-awesome-icon icon="fa-solid fa-file" />
			</a>
			<a class="mx-3 inline-block xl:hidden" title="harvard resume" href="https://docs.google.com/document/d/1qclNq4JPYsSMMasuI31pIs-YdlU0SbI_zMJKwGRCQjk/?usp=sharing" target="_blank">
				<font-awesome-icon icon="fa-solid fa-file" />
			</a>
		</div>

		<Menu as="div" class="relative inline-block text-left">
			<MenuButton class="inline-block mt-3 rounded-md bg-[#222222] px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
				{{$t('main.language')}}
				<font-awesome-icon icon="fa-solid fa-chevron-down" class="ml-2 mt-1 -mr-1 h-3 w-3" />
			</MenuButton>

			<MenuItems class="absolute bg-[#222222] text-white mx-auto rounded w-32">
				<MenuItem v-slot="{ active }">
					<button :class="[active ? 'bg-violet-500 text-white' : 'text-white', 'flex w-full items-center rounded-md px-2 py-2 text-sm',]" @click="$i18n.locale='es'">
						<span class="fi fi-mx mr-3"></span>
						Español
					</button>
				</MenuItem>
				<MenuItem v-slot="{ active }">
					<button :class="[active ? 'bg-violet-500 text-white' : 'text-white', 'flex w-full items-center rounded-md px-2 py-2 text-sm',]" @click="$i18n.locale='en'">
						<span class="fi fi-us mr-3"></span>
						English
					</button>
				</MenuItem>
			</MenuItems>
		</Menu>

		<br />

		<a class="mt-6 px-8 py-2 rounded-full border-2 border-white hover:bg-white hover:text-black hidden xl:inline-block" href="https://docs.google.com/presentation/d/1iMBa9Af9Jto3aX_yRi4lnozM_UpAAaj2V3pXv8Dv23Q/?usp=sharing" target="_blank">
			{{$t('main.download_resume')}}
		</a>
		<br />
		<a class="mt-6 px-8 py-2 rounded-full border-2 border-white hover:bg-white hover:text-black hidden xl:inline-block" href="https://docs.google.com/document/d/1qclNq4JPYsSMMasuI31pIs-YdlU0SbI_zMJKwGRCQjk/?usp=sharing" target="_blank">
			{{$t('main.download_harvard')}}
		</a>

		<div class="mt-8 block lg:hidden">
			<div class="cursor-pointer my-2 pb-2 text-zinc-400 hover:text-white" @click="emit('pageChange', 'Home')">
				{{$t('navbar.home')}}
			</div>
			<div class="cursor-pointer my-2 pb-2 text-zinc-400 hover:text-white" @click="emit('pageChange','AboutMe')">
				{{$t('navbar.aboutme')}}
			</div>
			<div class="cursor-pointer my-2 pb-2 text-zinc-400 hover:text-white" @click="emit('pageChange','Resume')">
				{{$t('navbar.resume')}}
			</div>
			<div class="cursor-pointer my-2 pb-2 text-zinc-400 hover:text-white" @click="emit('pageChange','Portfolio')">
				{{$t('navbar.portfolio')}}
			</div>
			<div class="cursor-pointer my-2 pb-2 text-zinc-400 hover:text-white" @click="emit('pageChange','Contact')">
				{{$t('navbar.contact')}}
			</div>
		</div>
	</div>
</template>
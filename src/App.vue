<script setup>
	import { ref } from 'vue'
	import Profile from './components/Profile.vue'
	import Home from './components/Home.vue'
	import AboutMe from './components/AboutMe.vue'
	import Resume from './components/Resume.vue'
	import Contact from './components/Contact.vue'
	import Portfolio from './components/Portfolio.vue'
	import Tooltip from './components/minicomponents/Tooltip.vue'

	const pageCurrent = ref( 'Home' );
</script>

<template>
	<div class="fixed top-0 right-2 font-bold">
		<span class="mx-1 cursor-pointer" :class="langCurrent.value=='es' ? 'text-white' : 'text-slate-500'" @click="langCurrent.value='es'">ES</span>
		<span class="mx-1 text-slate-500">|</span>
		<span class="mx-1 cursor-pointer" :class="langCurrent.value=='en' ? 'text-white' : 'text-slate-500'" @click="langCurrent.value='en'">EN</span>
	</div>

	<div class="flex items-center justify-center h-screen">
		<div class="grid grid-cols-12 bg-[#444444] rounded-3xl w-8/12 xl:h-5/6 lg:h-full md:h-full relative">
			<div class="col-span-3 text-center h-full mx-auto overflow-hidden relative">
				<Profile />
			</div>
			<div class="col-span-9 bg-[#222222] rounded-3xl px-2 py-12 h-full overflow-hidden relative">
				<Home v-if="pageCurrent=='Home'" />
				<AboutMe v-else-if="pageCurrent=='AboutMe'" />
				<Contact v-else-if="pageCurrent=='Contact'" />
				<Resume v-else-if="pageCurrent=='Resume'" />
				<Portfolio v-else-if="pageCurrent=='Portfolio'" />
			</div>

			<div class="absolute -right-20 bg-[#444444] w-16 pt-6 pb-6 rounded-full text-2xl text-black text-center text-gray-400">
				<div class="block cursor-pointer mb-6 relative tooltip" @click="pageCurrent='Home'">
					<font-awesome-icon icon="fa-solid fa-house" />
					<Tooltip>{{this.langMessage('navbar_home')}}</Tooltip>
				</div>
				<div class="block cursor-pointer mb-6 relative tooltip" @click="pageCurrent='AboutMe'">
					<font-awesome-icon icon="fa-solid fa-user" />
					<Tooltip>{{this.langMessage('navbar_aboutme')}}</Tooltip>
				</div>
				<div class="block cursor-pointer mb-6 relative tooltip" @click="pageCurrent='Resume'">
					<font-awesome-icon icon="fa-solid fa-graduation-cap" />
					<Tooltip>{{this.langMessage('navbar_resume')}}</Tooltip>
				</div>
				<div class="block cursor-pointer mb-6 relative tooltip" @click="pageCurrent='Portfolio'">
					<font-awesome-icon icon="fa-solid fa-briefcase" />
					<Tooltip>{{this.langMessage('navbar_portfolio')}}</Tooltip>
				</div>
				<div class="block cursor-pointer mb-6 relative tooltip">
					<font-awesome-icon icon="fa-solid fa-envelope" @click="pageCurrent='Contact'" />
					<Tooltip>{{this.langMessage('navbar_contact')}}</Tooltip>
				</div>
			</div>
		</div>
	</div>

</template>
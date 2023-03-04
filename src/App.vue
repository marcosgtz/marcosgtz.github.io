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
	<div class="h-full w-8/12 m-auto relative" style="padding-top: 10vh">
		<div class="grid grid-cols-12 h-5/6 bg-[#444444] rounded-3xl">
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
		</div>

		<div class="absolute -right-20 bg-[#444444] w-16 pt-6 pb-6 rounded-full text-2xl text-black text-center text-gray-400" style="top: 10vh">

			<div class="block cursor-pointer mb-6 relative tooltip" @click="pageCurrent='Home'">
				<font-awesome-icon icon="fa-solid fa-house" />
				<Tooltip>Home</Tooltip>
			</div>
			<div class="block cursor-pointer mb-6 relative tooltip" @click="pageCurrent='AboutMe'">
				<font-awesome-icon icon="fa-solid fa-user" />
				<Tooltip>About me</Tooltip>
			</div>
			<div class="block cursor-pointer mb-6 relative tooltip" @click="pageCurrent='Resume'">
				<font-awesome-icon icon="fa-solid fa-graduation-cap" />
				<Tooltip>Resume</Tooltip>
			</div>
			<div class="block cursor-pointer mb-6 relative tooltip" @click="pageCurrent='Portfolio'">
				<font-awesome-icon icon="fa-solid fa-briefcase" />
				<Tooltip>Portfolio</Tooltip>
			</div>
			<div class="block cursor-pointer mb-6 relative tooltip">
				<font-awesome-icon icon="fa-solid fa-envelope" @click="pageCurrent='Contact'" />
				<Tooltip>Concact</Tooltip>
			</div>
		</div>

	</div>

</template>
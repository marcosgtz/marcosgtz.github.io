<script setup>
	import { ref } from 'vue'
	import Profile from './components/Profile.vue'
	import Home from './components/Home.vue'
	import AboutMe from './components/AboutMe.vue'
	import Resume from './components/Resume.vue'
	import Contact from './components/Contact.vue'
	import Portfolio from './components/Portfolio.vue'
	import Tooltip from './components/minicomponents/Tooltip.vue'
	import { useRecaptchaProvider } from "vue-recaptcha/head";

	useRecaptchaProvider();

	const pageCurrent = ref( 'Home' );
	const mainShow = ref( false );

	function moveTo(place) {
		pageCurrent.value = place;
	}
</script>

<template>
	<div class="fixed top-0 right-0 w-12 h-12 pt-3 bg-zinc-850 text-center text-white z-10 rounded sm:hidden">
		<font-awesome-icon :icon="['fas', 'bars']" @click="mainShow = !mainShow" />
	</div>

	<div class="flex items-center justify-center h-full">
		<div class="grid grid-cols-12 bg-zinc-850 w-screen h-full xl:rounded-3xl xl:w-8/12 xl:h-5/6  relative">
			<div :class="{hidden: !mainShow}" class="absolute bg-zinc-850 rounded-3xl sm:static sm:bg-inherit xl:relative col-span-3 text-center h-full overflow-hidden sm:block z-10">
				<Profile @pageChange="moveTo" />
			</div>
			<div class="col-span-12 sm:col-span-9 bg-[#222222] xl:rounded-3xl px-2 py-12 h-full overflow-hidden relative">
				<Home v-if="pageCurrent=='Home'" />
				<AboutMe v-else-if="pageCurrent=='AboutMe'" />
				<Contact v-else-if="pageCurrent=='Contact'" />
				<Resume v-else-if="pageCurrent=='Resume'" />
				<Portfolio v-else-if="pageCurrent=='Portfolio'" />
			</div>

			<div class="hidden lg:block absolute -right-20 bg-zinc-850 w-16 pt-6 pb-6 rounded-full text-2xl text-center text-gray-400">
				<div class="cursor-pointer mb-6 relative tooltip" @click="pageCurrent='Home'">
					<font-awesome-icon icon="fa-solid fa-house" />
					<Tooltip>{{$t('navbar.home')}}</Tooltip>
				</div>
				<div class="cursor-pointer mb-6 relative tooltip" @click="pageCurrent='AboutMe'">
					<font-awesome-icon icon="fa-solid fa-user" />
					<Tooltip>{{$t('navbar.aboutme')}}</Tooltip>
				</div>
				<div class="cursor-pointer mb-6 relative tooltip" @click="pageCurrent='Resume'">
					<font-awesome-icon icon="fa-solid fa-graduation-cap" />
					<Tooltip>{{$t('navbar.resume')}}</Tooltip>
				</div>
				<div class="cursor-pointer mb-6 relative tooltip" @click="pageCurrent='Portfolio'">
					<font-awesome-icon icon="fa-solid fa-briefcase" />
					<Tooltip>{{$t('navbar.portfolio')}}</Tooltip>
				</div>
				<div class="cursor-pointer mb-6 relative tooltip" @click="pageCurrent='Contact'">
					<font-awesome-icon icon="fa-solid fa-envelope" />
					<Tooltip>{{$t('navbar.contact')}}</Tooltip>
				</div>
			</div>
		</div>
	</div>

</template>
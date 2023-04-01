<script setup>
	const currentYear = new Date( ).getFullYear( );

	const getAge = () => {
		return Math.abs( currentYear - new Date( '1988-04-20' ).getFullYear( ) );
	}
	const getAgeExperience = () => {
		return Math.abs( currentYear - new Date( '2011-02-01' ).getFullYear( ) );
	}
</script>

<template>
	<div class="text-white px-16 h-full overflow-hidden scrollbar-stable hover:overflow-y-scroll">
		<h1 class="text-3xl font-bold">
			{{this.langMessage('about_title1-1')}} <span class="text-emerald-500">{{this.langMessage('about_title1-2')}}</span>
		</h1>

		<div class="grid grid-cols-3 gap-10 mt-8 font-light">
			<div class="col-span-2  leading-7">
				{{this.langMessage('about_description1')}} {{ getAgeExperience() }} {{this.langMessage('about_description2')}}
				<br /><br />
				{{this.langMessage('about_description3')}} <span class='font-bold'>espageti</span>. {{this.langMessage('about_description4')}}
			</div>
			<div class="leading-9">
				<span class="text-emerald-600 font-bold mr-2">{{this.langMessage('about_age')}}</span>{{ getAge() }}
				<br />
				<span class="text-emerald-600 font-bold mr-2">{{this.langMessage('about_place')}}</span>Chiapas, MEX
				<br />
				<span class="text-emerald-600 font-bold mr-2">{{this.langMessage('about_email')}}</span><a href="mailto:gtzcrash@gmail.com">gtzcrash@gmail.com</a>
			</div>
		</div>

		<h1 class="text-2xl font-bold mt-12 mb-8">
			{{this.langMessage('about_title2-1')}} <span class="text-emerald-500">{{this.langMessage('about_title2-2')}}</span>
		</h1>

		<div class="grid grid-cols-2 gap-x-14 gap-y-6 text-justify">
			<div>
				<font-awesome-icon class="text-3xl text-emerald-600" icon="fa-solid fa-palette" />
				<h3 class="text-xl font-bold mt-2">Front-End</h3>
				<div class="leading-6 font-light text-sm">
					{{this.langMessage('about_frontend')}}
				</div>
			</div>

			<div>
				<font-awesome-icon class="text-3xl text-emerald-600" icon="fa-solid fa-tools" />
				<h3 class="text-xl font-bold mt-2">Back-End</h3>
				<div class="leading-6 font-light text-sm">
					{{this.langMessage('about_backend')}}
				</div>
			</div>

			<div>
				<font-awesome-icon class="text-3xl text-emerald-600" icon="fa-solid fa-server" />
				<h3 class="text-xl font-bold mt-2">{{this.langMessage('about_title3-1')}}</h3>
				<div class="leading-6 font-light text-sm">
					{{this.langMessage('about_services')}}
				</div>
			</div>

			<div>
				<font-awesome-icon class="text-3xl text-emerald-600" icon="fa-solid fa-gifts" />
				<h3 class="text-xl font-bold mt-2">{{this.langMessage('about_title3-2')}}</h3>
				<div class="leading-6 font-light text-sm">
					{{this.langMessage('about_thirdparty')}}
				</div>
			</div>
		</div>
	</div>
</template>
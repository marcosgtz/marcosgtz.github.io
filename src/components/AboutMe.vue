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
			{{$t('about.title1-1')}} <span class="text-emerald-500">{{$t('about.title1-2')}}</span>
		</h1>

		<div class="grid grid-cols-3 gap-10 mt-8 font-light">
			<div class="col-span-2  leading-7">
				{{$t('about.description1')}} {{ getAgeExperience() }} {{$t('about.description2')}}
				<br /><br />
				{{$t('about.description3')}} <span class='font-bold'>espageti</span>. {{$t('about.description4')}}
			</div>
			<div class="leading-9">
				<span class="text-emerald-600 font-bold mr-2">{{$t('about.age')}}</span>{{ getAge() }}
				<br />
				<span class="text-emerald-600 font-bold mr-2">{{$t('about.place')}}</span>Chiapas, MEX
			</div>
		</div>

		<h1 class="text-2xl font-bold mt-12 mb-8">
			{{$t('about.title2-1')}} <span class="text-emerald-500">{{$t('about.title2-2')}}</span>
		</h1>

		<div class="grid grid-cols-2 gap-x-14 gap-y-6 text-justify">
			<div>
				<font-awesome-icon class="text-3xl text-emerald-600" icon="fa-solid fa-palette" />
				<h3 class="text-xl font-bold mt-2">Front-End</h3>
				<div class="leading-6 font-light text-sm">
					{{$t('about.frontend')}}
				</div>
			</div>

			<div>
				<font-awesome-icon class="text-3xl text-emerald-600" icon="fa-solid fa-tools" />
				<h3 class="text-xl font-bold mt-2">Back-End</h3>
				<div class="leading-6 font-light text-sm">
					{{$t('about.backend')}}
				</div>
			</div>

			<div>
				<font-awesome-icon class="text-3xl text-emerald-600" icon="fa-solid fa-server" />
				<h3 class="text-xl font-bold mt-2">{{$t('about.title3-1')}}</h3>
				<div class="leading-6 font-light text-sm">
					{{$t('about.services')}}
				</div>
			</div>

			<div>
				<font-awesome-icon class="text-3xl text-emerald-600" icon="fa-solid fa-gifts" />
				<h3 class="text-xl font-bold mt-2">{{$t('about.title3-2')}}</h3>
				<div class="leading-6 font-light text-sm">
					{{$t('about.thirdparty')}}
				</div>
			</div>
		</div>
	</div>
</template>
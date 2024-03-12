<script setup>
	import ResumeCard from './minicomponents/ResumeCard.vue'
	import ResumeSkills from './minicomponents/ResumeSkills.vue'
</script>

<template>
	<div class="text-white px-16 h-full overflow-hidden scrollbar-stable hover:overflow-y-scroll">
		<h1 class="text-3xl font-bold">
			{{$t( 'resumen.title-main' )}}
		</h1>

		<div class="grid grid-cols-2 gap-8 mt-6">
			<div>
				<h2 class="text-2xl font-bold mb-6">{{$t( 'resumen.title-education' )}}</h2>

				<div class="grid grid-cols-3 text-sm">
					<ResumeCard>
						<template #date>2012</template>
						<template #place>Universidad Autónoma de Chiapas</template>
						<template #title>Mtro. En Administración con Terminal en Tecnologías de Información</template>
						<template #description>{{$t( 'resumen.professional-license' )}}: 11577979</template>
					</ResumeCard>
					<ResumeCard>
						<template #date>2006</template>
						<template #place>Instituto Tecnológico de Tuxtla Gutiérrez</template>
						<template #title>Ing. en Sistemas Computacionales</template>
						<template #description>{{$t( 'resumen.professional-license' )}}: 7262067</template>
					</ResumeCard>
				</div>

				<h2 class="text-2xl font-bold mb-6 mt-10">{{$t( 'resumen.title-experience' )}}</h2>

				<div class="grid grid-cols-3 text-sm">
					<ResumeCard>
						<template #date>2021 - {{$t( 'resumen.experience-present' )}}</template>
						<template #place>S4Learning</template>
						<template #title>{{$t( 'resumen.experience-2021-title' )}}</template>
						<template #description>{{$t( 'resumen.experience-2021-desc' )}}</template>
					</ResumeCard>
					<ResumeCard>
						<template #date>2018</template>
						<template #place>Universidad Autónoma de Chiapas</template>
						<template #title>{{$t( 'resumen.experience-2018-title' )}}</template>
						<template #description>{{$t( 'resumen.experience-2018-desc' )}}</template>
					</ResumeCard>
					<ResumeCard>
						<template #date>2014 - 2021</template>
						<template #place>Universidad Autónoma de Chiapas</template>
						<template #title>{{$t( 'resumen.experience-2014-title' )}}</template>
						<template #description>{{$t( 'resumen.experience-2014-desc' )}}</template>
					</ResumeCard>
					<ResumeCard>
						<template #date>2017</template>
						<template #place>Jóvenes Constructores de la Comunidad A.C</template>
						<template #title>{{$t( 'resumen.experience-2017-title' )}}</template>
						<template #description>{{$t( 'resumen.experience-2017-desc' )}}</template>
					</ResumeCard>
					<ResumeCard>
						<template #date>2012 - 2014</template>
						<template #place>Universidad Autónoma de Chiapas</template>
						<template #title>{{$t( 'resumen.experience-2012-title' )}}</template>
						<template #description>{{$t( 'resumen.experience-2012-desc' )}}</template>
					</ResumeCard>
					<ResumeCard>
						<template #date>2011 - 2012</template>
						<template #place>Universidad Autónoma de Chiapas</template>
						<template #title>{{$t( 'resumen.experience-2011-title' )}}</template>
						<template #description>{{$t( 'resumen.experience-2011-desc' )}}</template>
					</ResumeCard>
				</div>
			</div>

			<div>
				<h1 class="text-2xl font-bold mb-8">
					{{$t( 'resumen.title-skills' )}} <span class="text-emerald-500">{{$t( 'resumen.title-web' )}}</span>
				</h1>

				<ResumeSkills percent="85" skill="PHP"></ResumeSkills>
				<ResumeSkills percent="65" skill="Javascript"></ResumeSkills>
				<ResumeSkills percent="80" skill="HTML/CSS"></ResumeSkills>
				<ResumeSkills percent="35" skill="Vue 3"></ResumeSkills>
				<ResumeSkills percent="40" skill="NodeJS"></ResumeSkills>
				<ResumeSkills percent="20" skill="C#"></ResumeSkills>

				<h1 class="text-2xl font-bold mt-12 mb-8">
					{{$t( 'resumen.title-skills' )}} <span class="text-emerald-500">Frameworks</span>
				</h1>

				<ResumeSkills percent="60" skill="Laravel"></ResumeSkills>
				<ResumeSkills percent="50" skill="Inertia"></ResumeSkills>
				<ResumeSkills percent="30" skill="Twig"></ResumeSkills>
				<ResumeSkills percent="45" skill="ExpressJS"></ResumeSkills>

				<h1 class="text-2xl font-bold mt-12 mb-7">
					{{$t( 'resumen.title-other' )}}
				</h1>

				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Oracle</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">MySQL</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">PostgreSQL</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">MongoDB</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Python</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Linux</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">SSH</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Xen Server</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">VMWare</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">pfSense</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Git</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">IIS</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Apache</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Nginx</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">SimpleSamlPHP</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Google API's</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Ldap</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Azure</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Bash</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Joomla</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Wordpress</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Moodle</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Rest API's</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Certbot</div>
				<div class="bg-emerald-600 p-2 rounded m-1 inline-block text-sm">Firma Electrónica</div>
			</div>
		</div>

		<div class="col-span-2">
			<a class="inline-block text-2xl font-bold mb-6 mt-10" href="https://www.dropbox.com/sh/jz7x7p2nl0jb43b/AAA7b4-4rp6GWkz1_oL5KBCqa?dl=0" target="_blank">{{$t( 'resumen.title-courses' )}}</a>

			<div class="grid grid-cols-2 gap-10">
				<div class="grid grid-cols-3 border border-zinc-600 rounded-lg">
					<div class="bg-zinc-700 text-center rounded-l-lg flex items-center justify-center">
						<a href="https://platzi.com/@marcos.gutierrez/" target="_blank">
							<img src="https://static.platzi.com/static/images/footer/logo.png" class="max-h-10 max-w-20" />
						</a>
					</div>
					<div class="col-span-2 text-sm p-4">
						<ul class="list-disc ml-4 leading-6">
							<li>Administración de servidores Linux</li>
							<li>Backend con Node.JS: Api Rest con Express.js</li>
							<li>Creación de plugins para Wordpress</li>
							<li>Curso básico de MongoDB</li>
							<li>Curso de PostgreSQL</li>
							<li>Curso profesional de Git y Github</li>
							<li>Fundamentos de Node.JS</li>
							<li>Docker</li>
							<li>Single Page Applications en Laravel con Inertia y Vue.js</li>
						</ul>
					</div>
				</div>

				<div class="grid grid-cols-3 border border-zinc-600 rounded-lg">
					<div class="bg-zinc-700 text-center rounded-l-lg flex items-center justify-center">
						<a href="https://www.dropbox.com/sh/jz7x7p2nl0jb43b/AAA7b4-4rp6GWkz1_oL5KBCqa?dl=0" target="_blank">
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/320px-Oracle_logo.svg.png" class="max-h-10 max-w-20" />
						</a>
					</div>
					<div class="col-span-2 text-sm p-4">
						<ul class="list-disc ml-4 leading-6">
							<li>Oracle Database 12c: Administration Workshop Ed 2</li>
							<li>Oracle Database 12c: Install and Upgrade Workshop</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
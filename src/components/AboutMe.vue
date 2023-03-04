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
			Acerca de <span class="text-emerald-500">Mí</span>
		</h1>

		<div class="grid grid-cols-3 gap-10 mt-8 font-light">
			<div class="col-span-2  leading-7">
				Soy programador web con {{ getAgeExperience() }} años de experiencia en Front-End y Back-End. Conozco un poco de cada lenguaje
				de programación, pero mi especialidad es PHP.

				<br /><br />

				Tengo la habilidad de entender, modificar y adaptarme a las metodologías más comunes de programación,
				incluido el <span class="font-bold">espageti</span>. Estoy abierto a investigar
				por mi cuenta las cosas que desconozco y aprender en el proceso.
			</div>
			<div class="leading-9">
				<span class="text-emerald-600 font-bold mr-2">Edad</span>{{ getAge() }}
				<br />
				<span class="text-emerald-600 font-bold mr-2">Residencia</span>MEX
				<br />
				<span class="text-emerald-600 font-bold mr-2">Dirección</span>Andador 1, Fracc. Buenos Aires #125, TGZ, Chiapas
				<br />
				<span class="text-emerald-600 font-bold mr-2">Correo</span><a href="mailto:gtzcrash@gmail.com">gtzcrash@gmail.com</a>
				<br />
				<span class="text-emerald-600 font-bold mr-2">Teléfono</span>+52 9611876874

			</div>
		</div>

		<h1 class="text-2xl font-bold mt-12 mb-8">
			Que puedo <span class="text-emerald-500">Hacer?</span>
		</h1>

		<div class="grid grid-cols-2 gap-x-14 gap-y-6 text-justify">
			<div>
				<font-awesome-icon class="text-3xl text-emerald-600" icon="fa-solid fa-palette" />
				<h3 class="text-xl font-bold mt-2">Front-End</h3>
				<div class="leading-6 font-light text-sm">
					Conocimiento intermedio de js; básico-intermedio de bootstrap,
					tailwind, vue y angular.
				</div>
			</div>

			<div>
				<font-awesome-icon class="text-3xl text-emerald-600" icon="fa-solid fa-tools" />
				<h3 class="text-xl font-bold mt-2">Back-End</h3>
				<div class="leading-6 font-light text-sm">
					Conocimiento avanzado de PHP. Intermedio de Laravel, Lumen, Twig, Inertia.
					Básico en nodejs + expressjs
				</div>
			</div>

			<div>
				<font-awesome-icon class="text-3xl text-emerald-600" icon="fa-solid fa-server" />
				<h3 class="text-xl font-bold mt-2">Servicios</h3>
				<div class="leading-6 font-light text-sm">
					Instalación y configuración de servicios web (apache, nginx, iis), manejo de ssh, ftp, bash,
					php-(fpm,cli), mysql, oracle.
				</div>
			</div>

			<div>
				<font-awesome-icon class="text-3xl text-emerald-600" icon="fa-solid fa-gifts" />
				<h3 class="text-xl font-bold mt-2">Terceros</h3>
				<div class="leading-6 font-light text-sm">
					Autenticaciones con Ldap, Azure, Google, Saml. Creación de plugins básicos para wordpress.
					Google Admin SDK con PHP. Manejo de firmas electrónicas.
				</div>
			</div>
		</div>
	</div>
</template>
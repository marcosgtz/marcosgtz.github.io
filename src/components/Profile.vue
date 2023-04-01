<template>
	<div class="mt-16 text-white">
		<img class="rounded-full w-36 shadow-xl shadow-zinc-900 inline-block" src="/perfil.jpg" />

		<div class="mt-12 text-4xl font-bold">
			Marcos Gtz.
		</div>

		<div class="mt-2 text-zinc-300 text-md font-light">{{this.langMessage('main_profession')}}</div>

		<div class="mt-6 text-xl">
			<a class="mx-3" href="https://www.linkedin.com/" target="_blank">
				<font-awesome-icon icon="fa-brands fa-linkedin-in" />
			</a>
			<a class="mx-3" href="https://www.facebook.com/marcos.gtz.16/" target="_blank">
				<font-awesome-icon icon="fa-brands fa-facebook-f" />
			</a>
			<a class="mx-3" href="https://twitter.com/MarcosG52811338" target="_blank">
				<font-awesome-icon icon="fa-brands fa-twitter" />
			</a>
		</div>

		<a class="inline-block mt-12 px-8 py-2 rounded-full border-2 border-white" href="https://docs.google.com/presentation/d/1dgAs-2XnmkFbhRVE3UGviVdESzElpgsO1EqWduR0VaU/edit?usp=share_link" target="_blank">
			{{this.langMessage('main_download_resume')}}
		</a>

		<div class="absolute bottom-3 left-0 right-0 m-auto text-zinc-300 font-light text-xs">
			© 2022 {{this.langMessage('main_copyright')}}
		</div>
	</div>
</template>
<script setup>
import { ref } from 'vue';
import { Checkbox } from 'vue-recaptcha/head';
import emailjs from '@emailjs/browser';
import {Dialog,DialogPanel,DialogTitle} from '@headlessui/vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n();
const regex = new RegExp(/[\p{Letter}\p{Mark}\s-]+/gu);
const regexMail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

console.log(import.meta.env.VITE_TEST);

const form = ref({
	from_name: '',
	from_email: '',
	message: '',
	'g-recaptcha-response': '',
	processing: false,
	error: {}
});

const modal = ref({
	show: false,
	message: ''
});

const sendMail = () => {
	form.value.error.from_name = false;
	form.value.error.from_email = false;
	form.value.error.message = false;
	form.value.error.recaptcha = false;

	if(!regex.test(form.value.from_name)) {
		form.value.error.from_name = true;
	}
	else if(!regexMail.test(form.value.from_email)) {
		form.value.error.from_email = true;
	}
	else if(!regex.test(form.value.message)) {
		form.value.error.message = true;
	}
	else if(form.value['g-recaptcha-response']=='') {
		form.value.error.recaptcha = true;
	}
	else {
		form.value.processing = true;

		emailjs.send(import.meta.env.VITE_MAILJS_SERVICE, import.meta.env.VITE_MAILJS_TEMPLATE, form.value, {publicKey:import.meta.env.VITE_MAILJS_PUBLICKEY})
			.then(
				(response) => {
					console.log(response.status);
					form.value.processing = false;
					modal.value.show = true;
					modal.value.message = i18n.t("contact.send-success");
				},
				(error) => {
					console.log(error);
					form.value.processing = false;
					modal.value.message = i18n.t("contact.send-failed");
				},
			);
	}
}
</script>

<template>
	<div class="text-white px-16 h-full overflow-hidden hover:overflow-y-scroll">
		<h1 class="text-3xl font-bold">
			Contacto
		</h1>

		<div class="grid grid-cols-3 gap-10 mt-8 font-light">
			<div class="col-span-2">
				<div class="w-full">
					{{$t('contact.name-title')}}
					<span class="text-red-400 ml-4" v-if="form.error.from_name">
						{{$t('contact.name-error')}}
					</span>
				</div>
				<input class="w-full rounded border border-zinc-600 bg-zinc-850 h-10 px-4" type="text" placeholder="John Doe" v-model="form.from_name" />

				<div class="w-full mt-4">
					{{$t('contact.email-title')}}
					<span class="text-red-400 ml-4" v-if="form.error.from_email">
						{{$t('contact.email-error')}}
					</span>
				</div>
				<input class="w-full rounded border border-zinc-600 bg-zinc-850 h-10 px-4" type="email" placeholder="john@doe.io" v-model="form.from_email" />

				<div class="w-full mt-4">
					{{$t('contact.message-title')}}
					<span class="text-red-400 ml-4" v-if="form.error.message">
						{{$t('contact.message-error')}}
					</span>
				</div>
				<textarea class="w-full rounded border border-zinc-600 bg-zinc-850 h-48 text-white px-4 py-2" v-model="form.message" :placeholder="$t('contact.message-placeholder')"></textarea>

				<div class="w-full mt-4 text-right flex flex-wrap">
					<span class="text-red-400 ml-4" v-if="form.error.recaptcha">
						{{$t('contact.recaptcha-error')}}
					</span>

					<Checkbox v-model="form['g-recaptcha-response']" theme="light" />
					<button @click="sendMail" class="w-full lg:w-auto border border-white rounded-full px-4 py-2 h-12 mt-3 ml-auto hover:bg-white hover:text-black disabled:bg-white/25 disabled:cursor-not-allowed" :disabled="form.processing">
						<span v-if="form.processing==true">
							<font-awesome-icon :icon="['fas', 'spinner']" spin class="mr-2" />
							{{$t('contact.send-processing')}}
						</span>
						<span v-else>
							{{$t('contact.send-text')}}
						</span>
					</button>
				</div>
			</div>
			<div>
				<div class="bg-zinc-800 border border-zinc-600 m-auto pt-6 pb-6 text-white text-center">
					<font-awesome-icon icon="fa-solid fa-location-dot" class="text-emerald-600 text-4xl m-auto mb-4" />
					<br />
					<span class="text-lg font-bold">Chiapas, México</span>
				</div>
			</div>
		</div>
	</div>

	<Dialog :open="modal.show" as="div" class="fixed z-50 w-screen h-screen inset-0 bg-zinc-800/75">
		<div class="flex min-h-full items-center justify-center p-4 text-center">
			<DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-zinc-900 p-6 text-white align-middle shadow-xl transition-all">
				<DialogTitle class="font-bold text-lg mb-2">{{$t('contact.modal-title')}}</DialogTitle>

				<p>{{modal.message}}</p>

				<button @click="modal.show=false" class="mt-6 px-4 py-2 border-zinc-900 rounded-full bg-zinc-700">Cerrar</button>
			</DialogPanel>
		</div>
	</Dialog>
</template>
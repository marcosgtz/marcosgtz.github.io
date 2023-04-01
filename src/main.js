import { createApp, ref } from 'vue'
import App from './App.vue'

import './assets/main.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import LangES from './locales/es.json'
import LangEN from './locales/en.json'

library.add( fab, fas, far )

const langCurrent = ref('es')
const langMessage = (message_name) => {

	if( langCurrent.value == 'en' ) {
		return LangEN[message_name] || ''
	}

	return LangES[message_name] || ''
}

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);
app.config.globalProperties.langMessage = langMessage;
app.config.globalProperties.langCurrent = langCurrent;
app.mount('#app');
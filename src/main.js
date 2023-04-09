import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

import './assets/main.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import messages from '@intlify/unplugin-vue-i18n/messages'

library.add( fab, fas, far )

const i18n = createI18n({
	locale: 'es',
	messages
})
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(i18n);
app.mount('#app');
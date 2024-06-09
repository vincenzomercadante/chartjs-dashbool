import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { all } from '@fortawesome/free-solid-svg-icons'

library.add(...all)

app.component('font-awesome-icon', FontAwesomeIcon)

const app = createApp(App)

app.mount('#app')

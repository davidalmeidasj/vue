import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './assets/_fonts.css';

library.add(faLocationDot, faPhone);

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');

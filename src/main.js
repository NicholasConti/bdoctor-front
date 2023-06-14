import { createApp } from 'vue';
import * as bootstrap from 'bootstrap';

import './assets/main.scss';
import App from './App.vue';
//FA
import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { router } from './router';

library.add(faDownload, faBars, faUserDoctor);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
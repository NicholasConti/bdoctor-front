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
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { router } from './router';

library.add(faDownload, faBars, faUserDoctor, faTwitter, faInstagram, faFacebookF, faYoutube, faLinkedinIn, faEnvelope, faLocationDot, faPhoneFlip, faSuitcaseMedical, faStar);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

//importing AOS 
import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App);

app.use(AOS.init());

mount('#app');







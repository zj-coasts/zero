import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import { setGlobalOptions } from 'vue-request'
import vueRequestGlobalOptions from './config/http/VueRequestGlobalOptions'
setGlobalOptions(vueRequestGlobalOptions) // 设置request的全局配置

createApp(App).use(router).use(store).use(Vant).mount('#app')

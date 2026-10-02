import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import {library} from '@fortawesome/fontawesome-svg-core'

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import {faFolderPlus, faCircleArrowUp, faCircleArrowDown, faFilter, faFile, faTrashCan}  from '@fortawesome/free-solid-svg-icons'


library.add(faFolderPlus, faCircleArrowUp, faCircleArrowDown, faFilter, faFile, faTrashCan)

createApp(App).component('font-awesome-icon',FontAwesomeIcon).mount('#app')

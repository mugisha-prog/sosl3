import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import contact from '../views/contact.vue'
import services from '../views/services.vue'
import gallery from '../views/gallery.vue'
import kigali from '../views/kigali.vue'
import north from '../views/north.vue'
import south from '../views/south.vue'
import east from '../views/east.vue'
import west from '../views/west.vue'
import videos from '../views/videos.vue'
import photos from '../views/photos.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: home
}, {
    path: '/about',
    name: 'about',
    component:about
}, {
    path: '/contact',
    name: 'contact',
    component: contact
}, {
    path: '/services',
    name: 'services',
    component: services
}, {
    path: '/gallery',
    name: 'gallery',
    component: gallery
}, {
    path: '/kigali',
    name: 'kigali',
    component: kigali
}, {
    path: '/north',
    name: 'north',
    component: north
}, {
    path: '/south',
    name: 'south',
    component: south
}, {
    path: '/east',
    name: 'east',
    component: east
}, {
    path: '/west',
    name: 'west',
    component: west
}, {
    path: '/videos',
    name: 'videos',
    component: videos
}, {
    path: '/photos',
    name: 'photos',
    component: photos
},


]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router



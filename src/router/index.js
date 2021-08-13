import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/Home.vue'
import Contact from '../components/Contact.vue'
import StripeApplication from '../components/StripeApplication.vue'

const routes = [
 {
   path: '/:pathMatch(.*)*',
   redirect: {name: 'Home'}
 },
 {
   path: '/',
   name: 'Home',
   component: Home
 },
 {
   path: '/contact',
   name: 'contact',
   component: Contact
 },
 {
   path: '/stripe-application',
   name: 'StripeApplication',
   component: StripeApplication
 },
]

const router =  createRouter({
  history: createWebHistory(),
  routes,
})

export default router
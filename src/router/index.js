import { createRouter, createWebHistory } from "vue-router";

import sourceData from '@/data.json'
import StripeApplication from '../components/StripeApplication.vue'

const routes = [
 {
   path: '/:pathMatch(.*)*',
   name: 'NotFound',
   redirect: {name: 'Home'}
 },
 {
   path: '/',
   name: 'Home',
   component: ()=>import('@/components/Home.vue')
 },
 {
   path: '/contact',
   name: 'contact',
   component: ()=>import('@/components/Contact.vue')
 },
 {
   path: '/application/:slug',
   name: 'application',
   beforeEnter(to, from){
     const exists = sourceData.application.find(
       application => application.slug == to.params.slug
     )
     if(!exists) return {name: 'NotFound'}
   },
   component: ()=>import('@/components/Application.vue')
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
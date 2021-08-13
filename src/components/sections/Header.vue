<template>
  <div class=" hero bg-gray-50">
    <div class="relative overflow-hidden">
      <div class="absolute inset-y-0 h-full w-full" aria-hidden="true">
        <div class="relative h-full">
          <svg class="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full" width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="e229dbec-10e9-49ee-8ec3-0286ca089edf" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)" />
          </svg>
          <svg class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="d2a68204-c383-44b1-b99f-42ccff4e5365" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)" />
          </svg>
        </div>
      </div>

      <div class="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <nav class="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
              <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a class=" raleway font-extrabold text-lg lg:text-2xl" href="#home">
                    <span class="sr-only">Stripe Plus Ope Idris</span>
                    <span class=" text-stripePurple">stripe</span>plus<span class=" text-red-500">ope</span>idris
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <PopoverButton class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span class="sr-only">Open main menu</span>
                      <MenuIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div class="hidden md:flex md:space-x-10">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium text-xl text-gray-500 hover:text-gray-900">{{ item.name }}</a>
              </div>
              <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <span class="inline-flex rounded-md shadow">
                  <a href="#contact" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500">
                    Say Hi :&#41;
                  </a>
                </span>
              </div>
            </nav>
          </div>

          <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <PopoverPanel focus class="absolute top-0 inset-x-0 z-40 p-2 transition transform origin-top-right md:hidden">
              <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img class="h-8 w-auto" src="../../assets/oi_icon.png" alt="Logo" />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span class="sr-only">Close main menu</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3 space-y-1">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
                </div>
                <a href="#contact" class="block w-full px-5 py-3 text-center font-bold text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700">
                  Say Hi :&#41;
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </div>
      <div class=" header-content relative">

        <div class="graphic grid gap-y-8 graphic max-w-3/5 mx-auto px-4 sm:px-6 lg:grid-cols-3  lg:gap-5">
            <div class=" hidden lg:flex items-center justify-center"><OpeHeader class=" transform -rotate-20"/></div>
            <div class="flex items-center justify-center"><span class=" sr-only">Plus</span><Plus /></div>
            <div class="flex  items-center justify-center transform lg:rotate-20"><img class=" w-2/3 md:w-1/2 lg:w-full" src="../../assets/header_stripe_logo.png" alt="Stripe"></div>
            <div class="h-full flex items-center justify-center order-first lg:order-none"><img src="../../assets/OpeImage.png" alt="Ope Idris"></div>
            <div class=" flex items-center justify-center"> <img src="../../assets/header_equals.png" alt="equals"></div>
            <div class="flex  items-center justify-center"><img class=" animate-pulse" src="../../assets/Heart.png" alt="Heart"></div>
        </div>

        <div class=" subtitles mt-16 mx-auto px-4 sm:mt-24 sm:px-6 pb-16">
          <div class="text-center">
            <h1 class="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl pb-4">
              <span class="block">Why Stripe and I are a match</span>
              <span class="block text-indigo-600">made in heaven</span>
            </h1>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Hey! I’m Ope Idris and to be honest Stripe is a dream company of mine. I put together this site as a fun project for myself but I hope you like it. I think it shows I’ll put as much effort into the company as I did into this application.
            </p>
          </div>
        </div>
      
    </div>
    <img src="../../assets/rectangles_blue.png" class=" hidden md:block absolute top-52 -left-4" alt="">
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon, PlusIcon } from '@heroicons/vue/outline'

import OpeHeader from '../../assets/svg/header_ope.svg'
import Plus from '../../assets/svg/Plus.svg'
import HeartIcon from '../../assets/svg/Icon.svg'



const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Who am I?', href: '#video' },
  { name: 'Why Me?', href: '#key-traits' },
  { name: "FAQ's", href: '#faq' },
]

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
    OpeHeader,
    Plus,
    HeartIcon,
  },
  setup() {
    return {
      navigation,
    }
  },
}
</script>
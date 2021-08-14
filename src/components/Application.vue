<template>
  <Header id="home" :company-name="application.companyName" :nav-logo="application.navLogo" :header-logo="application.headerLogo" :slug="application.slug" :color="application.color"/>
  <Video id="video" :video-url="application.videoUrl" :video-bg="application.color.videoBg" />
  <FeatureSection id="key-traits" :company-name="application.companyName" :text-high-light="application.color.textHighLight" />


  <div :class="`bg-${application.color.lightBg}`">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
        <span class="block raleway">Like What You See?</span>
        <span :class="`text-${application.color.textHighLight}`" class="block">Don't be shy. Drop a line and say Hi!</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <a href="#contact" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white" :class="`bg-${application.color.textHighLight} hover:bg-${application.color.darkHover}`">
            Hello!
          </a>
        </div>
      </div>
    </div>
  </div>

  <frequently-asked id="faq"/>

  <div id="contact" class="contact-background flex flex-col items-center py-12">
    <h4 class="raleway font-extrabold text-gray-900 text-4xl  text-center">That's all folks!</h4>
    <p class=" font-medium text-xl lg:font-light lg:text-white text-center max-w-3/5 py-4">If you’re reading this I hope you found this cool. i certainly found it fun to make. If you have any comments, feedback or just want to say hi hit me up below.<br>
    <span class=" text-yellow-400 font-bold">&#40;</span>or if you want a sense of how I think my substack is where I’d start ;&#41; <span class=" text-yellow-400 font-bold">&#41;</span>
    </p>
    <div class="pt-6 pb-6 w-9/12 sm:w-8/12 md:w-6/12 lg:w-1/3 xl:w-1/4 flex flex-col items-center bg-gray-50 shadow-2xl mb-16">
      <img class="pr-5" src="../assets/contact_illustration.png" alt="Me Saying Hi">
      <form action="#" method="POST" name="contact" class=" w-9/12" data-netlify="true" data-netlify-honeypot="bot-field">
       <input type="hidden" name="form-name" value="contact" />
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 railway">Name</label>
            <div class="mt-1">
              <input type="text" name="name" id="name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Sarah Smith" />
            </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 railway">Email</label>
            <div class="mt-1">
              <input type="email" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="coolestkid@email.com" />
            </div>
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 railway">Message</label>
          <div class="mt-1">
            <textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" />
          </div>
        </div>
          <button type="submit" class="inline-flex items-center justify-center px-2.5 py-1.5 border border-transparent text-xs raleway font-bold rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2 mx-auto w-full text-center">
        Submit
        </button>
        
      </form>
      <div class=" grid grid-cols-4 gap-4 mt-4">
        <a href="https://nobodyknows.substack.com/"><SubstackIcon class="h-8 w-8" /></a>
        <a href="https://www.instagram.com/thisisopeidris/"><InstagramIcon class="h-8 w-8" /></a>
        <a href="https://twitter.com/thisIsOpeIdris"><TwitterIcon class="h-8 w-8" /></a>
        <a href="https://github.com/opeidris"><GithubIcon class="h-8 w-8" /></a>
      </div>
    </div>

  </div>


</template>

<script>
import {useRoute} from 'vue-router'
import { ref, computed } from 'vue'
import sourceData from '@/data.json'


import Header from './sections/Header.vue'
import Video from './sections/Video.vue'
import FeatureSection from './sections/FeatureSection.vue'
import FrequentlyAsked from './sections/FrequentlyAsked.vue'



import SubstackIcon from '../assets/svg/SubStack Icon.svg'
import InstagramIcon from '../assets/svg/instagram_icon.svg'
import TwitterIcon from '../assets/svg/twitter_icon.svg'
import GithubIcon from '../assets/svg/github_icon.svg'


export default {

  setup(){
    const route = useRoute()
    const applicationSlug = ref(route.params.slug)
    const application = sourceData.application.find(application => application.slug == applicationSlug.value)
  
    console.log(applicationSlug.value)
    return {
      application
    }
  },

  components: {
    Header,
    Video,
    FeatureSection,
    FrequentlyAsked,
    SubstackIcon,
    InstagramIcon,
    TwitterIcon,
    GithubIcon
  }

}
</script>

<style>

</style>
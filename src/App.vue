<template>
  <Header />
  <Video />
  <FeatureSection />

  <div class="bg-indigo-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
        <span class="block">Ready to dive in?</span>
        <span class="block text-indigo-600">Start your free trial today.</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Get started
          </a>
        </div>
      </div>
    </div>
  </div>

  <frequently-asked />

  <div class="h-96 bg-stripePurple"></div>


</template>

<script>
import Header from './components/Header.vue'
import Video from './components/Video.vue'
import FeatureSection from './components/FeatureSection.vue'
import FrequentlyAsked from './components/FrequentlyAsked.vue'

export default {
  components: {
    Header,
    Video,
    FeatureSection,
    FrequentlyAsked
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Raleway:wght@500;700;800&display=swap');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Quicksand', sans-serif;
}

.raleway {
  font-family: 'Raleway', sans-serif;
}
</style>

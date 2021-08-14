<template>
  <div class="py-16 bg-gray-50 overflow-hidden lg:py-24">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
      </svg>

      <div class="relative">
        <h2 class="text-center raleway text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          A little bit more about me
        </h2>
        <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500 font-light">
          Obviously you can’t really get to know somebody with just a webpage. So listed below are just the half-time highlights. That said, here are some traits I define myself by.
        </p>
      </div>

      <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div class="relative">
          <h3 class=" raleway text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
            What makes me, well ... me?
          </h3>
          <p class="mt-3 text-lg text-gray-500">
            Know thyself and know thy enemy and you will be the victor of 100 battles. I don’t really have any enemies but I’m trying my best to know a little bit about myself. <span class="bold">Here’s why I think I will be a great fit at {{companyName}}.</span>
          </p>

          <dl class="mt-10 space-y-10">
            <div v-for="item in transferFeatures" :key="item.id" class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md text-white" :class="`bg-${textHighLight}`">
                  <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                </div>
                <p class="ml-16 text-lg leading-6 font-semibold text-gray-900">{{ item.name }}</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ item.description }}
              </dd>
            </div>
          </dl>
        </div>

        <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
          <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
            <defs>
              <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
          </svg>
          <img class="relative mx-auto" width="490" src="../../assets/ted_stage.png" alt="standing on the TED X Stage" />
        </div>
      </div>

      <svg class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
      </svg>

      
    </div>
  </div>
</template>

<script>
  import { LightningBoltIcon, LightBulbIcon, BookOpenIcon } from '@heroicons/vue/outline'

  const transferFeatures = [
    {
      id: 1,
      name: 'A slow thinker',
      description:
        'I know it sounds odd but that’s how I best describe myself. I like to think thrice before speaking and if you present me with an idea I would rather take  a few hours to process it before giving my response.',
      icon: LightBulbIcon,
    },
    {
      id: 2,
      name: 'Extremely Curious',
      description:
        'I am a voracious reader and almost a compulsive learner. Those who know me know that if someone mentions a new topic I am instantly enraptured. I think this is a trait that lead to me being a Curator for TEDxPerth. I see anyone I meet as a new story I was dying to know more about and put on  the stage.',
      icon: BookOpenIcon,
    },
    {
      id: 3,
      name: 'Action Bias',
      description:
        'Action is better than inaction. Although intentional inaction is also a form of action. The previous sentence went in circles but the point still stands. I am someone who bias’ towards fast paced action while still refusing to compromise on the details.',
      icon: LightningBoltIcon,
    },
  ]
  
  export default {
    name: 'FeatureSection',
    props: ['companyName', 'textHighLight'],
    setup() {
      return {
        transferFeatures,
      }
    },
  }
</script>
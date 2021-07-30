<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 class="text-center text-3xl raleway font-extrabold text-gray-900 sm:text-4xl">
          Frequently asked questions
        </h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-gray-900">
                  {{ faq.question }}
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                {{ faq.answer }}
              </p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/outline'

const faqs = [
  {
    question: "What do you do in your spare time?",
    answer:
      "I consume a lot of content. Books, podcasts, audiobooks, fiction and non-fiction. Though I probably read the most if you put all the reading in one group",
  },
  {
    question: "Then what's your favourite book?",
    answer:
      "I used to say 'The Count of Monte Cristo' but I haven't read that in years. Currently it would likely be 'A Million Miles in a Thousand Years', Donald Millers memo on choosing the story your life becomes. It resonated deeply with me",
  },
  {
    question: "Do you really not listen to music?",
    answer:
      "I know it's weird especially considering I play the drums. I enjoy music and if it's playing I won't turn it off, but my brain never prompts me to turn it on either.",
  },
  {
    question: "Why do you listen to podcasts on 2.7x speed?",
    answer:
      "I had 20-30 hours of podcasts I wanted to listen to each week. Speeding it up allowed me to get through more XD. I started on 1.5x, and everytime it felt slow I bumped it up.",
  },
  {
    question: "How was it like living in Saudi Arabia?",
    answer:
      "I was school aged so my life was mostly about school but overall I enjoyed it. That said, in hindshight, things like them checking under the school bus for bombs everyday was weird.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. This was a very bad joke",
  },
]

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
  },
  setup() {
    const open = ref(false)

    return {
      faqs,
      open,
    }
  },
}
</script>
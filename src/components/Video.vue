<template>
  <div class=" bg-darkPurple flex flex-col items-center relative">
    <div class=" video-content max-w-3/5 flex flex-col items-center py-8  sm:py-12 md:py-16 text-center">
      <h3 class=" text-4xl sm:text-5xl  max-w-md md:max-w-full font-bold md:text-6xl text-center text-white mx-auto">
      They say a picture is worth 1000 words
      </h3>
      <h4 class="text-2xl sm:text-3xl lg:text-4xl text-yellow-400 py-4 md:py-6 lg:py-8">So maybe a video is worth 10,000?</h4>
      <div class="aspect-w-16 aspect-h-9 w-full">
        <iframe  src="https://www.youtube.com/embed/UPEAwxDqMKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <img src="../assets/rectangles_orange.png" class=" hidden md:block absolute bottom-36 -left-28 md:-left-24 lg:-left-8 " alt="">
    <img src="../assets/rectangles_red.png" class=" hidden md:block absolute top-36 -right-28 md:-right-24 lg:-right-8 " alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style>


</style>
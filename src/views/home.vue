<template>
  <section
    class="min-h-screen bg-cover bg-center relative flex items-center"
    style="background-image: url('/image(13).jpeg');"
  >
    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full flex justify-center">
      <div class="max-w-3xl text-white text-center flex flex-col items-center">

        <span class="bg-green-600 px-5 py-2 rounded-full text-sm font-semibold tracking-wide inline-block mb-6">
          Welcome to Tembera U Rwanda
        </span>

        <h1 class="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Discover The Beauty
          <span class="text-green-400">Of Rwanda</span>
        </h1>

        <p class="text-lg md:text-xl text-gray-200 leading-9 mb-10">
          Explore breathtaking landscapes, national parks, beautiful lakes,
          luxury hotels, cultural heritage, and unforgettable adventures across Rwanda.
        </p>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-5 justify-center">
          <button
            class="bg-green-600 hover:bg-yellow-300 transition duration-300 px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl text-white hover:text-black"
          >
            <router-link to="/places">Explore Places</router-link>
          </button>

          <button
            class="border border-white hover:bg-yellow-300 hover:border-yellow-300 hover:text-black transition duration-300 px-8 py-4 rounded-2xl text-lg font-semibold text-white"
          >
            <router-link to="/about">Learn More</router-link>
          </button>
        </div>

        <!-- Statistics -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 w-full">
          <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <h2 class="text-3xl font-bold text-green-400">30+</h2>
            <p class="text-gray-200 mt-2">Tourist Sites</p>
          </div>

          <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <h2 class="text-3xl font-bold text-green-400">5</h2>
            <p class="text-gray-200 mt-2">National Parks</p>
          </div>

          <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <h2 class="text-3xl font-bold text-green-400">100+</h2>
            <p class="text-gray-200 mt-2">Hotels</p>
          </div>

          <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <h2 class="text-3xl font-bold text-green-400">10K+</h2>
            <p class="text-gray-200 mt-2">Visitors</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
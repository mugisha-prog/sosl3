<template>
  <section class="min-h-screen bg-gray-50 py-16 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- About Content -->
      <div class="grid lg:grid-cols-2 gap-14 items-center">
        <!-- Image -->
        <div>
          <img
            src="/src/assets/image(6).jpeg"
            alt="Rwanda Tourism"
            class="w-full h-[500px] object-cover rounded-[30px] shadow-2xl"
          />
        </div>

        <!-- Text -->
        <div>
          <span class="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
            ABOUT US
          </span>

          <h1 class="text-5xl font-bold text-gray-900 mt-6 leading-tight">
            Discover Rwanda With
            <span class="text-green-700">Tembera  Rwanda</span>
          </h1>

          <p class="text-gray-600 text-lg leading-9 mt-6">
            Tembera U Rwanda is a modern tourism platform designed to help people
            discover the beauty, culture, adventure, and unforgettable experiences
            found across Rwanda.
          </p>

          <p class="text-gray-600 text-lg leading-9 mt-4">
            From breathtaking national parks and beautiful lakes to cultural sites,
            hotels, restaurants, and hidden destinations, our platform connects
            visitors with the best places Rwanda has to offer.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 mt-10">
            <div class="bg-white p-6 rounded-2xl shadow-md text-center border border-green-100">
              <h2 class="text-3xl font-bold text-green-700">30+</h2>
              <p class="text-gray-600 mt-2">Tourist Places</p>
            </div>

            <div class="bg-white p-6 rounded-2xl shadow-md text-center border border-green-100">
              <h2 class="text-3xl font-bold text-green-700">10K+</h2>
              <p class="text-gray-600 mt-2">Visitors</p>
            </div>

            <div class="bg-white p-6 rounded-2xl shadow-md text-center border border-green-100">
              <h2 class="text-3xl font-bold text-green-700">100%</h2>
              <p class="text-gray-600 mt-2">Rwandan Experience</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Mission & Vision -->
      <div class="grid md:grid-cols-2 gap-8 mt-24">
        <div class="bg-white rounded-3xl p-10 shadow-lg border border-green-100 hover:-translate-y-2 transition duration-300">
          <div class="mb-6">
            <img
              src="/src/assets/image(8).jpeg"
              alt="Our Mission"
              class="w-24 h-24 object-cover rounded-2xl shadow-md"
            />
          </div>

          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>

          <p class="text-gray-600 text-lg leading-8">
            To promote tourism in Rwanda by using technology to connect people with
            beautiful destinations, cultural experiences, and memorable adventures.
          </p>
        </div>

        <div class="bg-white rounded-3xl p-10 shadow-lg border border-green-100 hover:-translate-y-2 transition duration-300">
          <div class="mb-6">
            <img
              src="/src/assets/image(9).jpeg"
              alt="Our Vision"
              class="w-24 h-24 object-cover rounded-2xl shadow-md"
            />
          </div>

          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Our Vision
          </h2>

          <p class="text-gray-600 text-lg leading-8">
            To become the leading digital tourism platform in Rwanda that inspires
            people around the world to explore and experience Rwanda.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// You can add animations or API calls here later
</script>

<style scoped>
/* Extra custom styling if needed */
</style>

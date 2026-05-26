<template>
  <div class="min-h-screen bg-gray-100 text-gray-800">
    <!-- Hero Section -->
    <header class="bg-blue-900 text-white py-16 px-6 text-center shadow-lg">
      <h1 class="text-5xl font-bold mb-4">SOS TECHNICAL HIGH SCHOOL</h1>
      <p class="text-lg max-w-3xl mx-auto">
        Building future professionals through quality technical education,
        innovation, discipline, and creativity.
      </p>
      <button class="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl transition duration-300">
        Learn More
      </button>
    </header>

    <!-- About Section -->
    <section class="py-16 px-6 max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 class="text-3xl font-bold text-blue-900 mb-4">About Our School</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            SOS TECHNICAL HIGH SCHOOL is dedicated to providing students with
            practical and modern technical skills that prepare them for the
            future job market and higher education opportunities.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Our mission is to empower learners through innovation, teamwork,
            discipline, and technology-based education.
          </p>
        </div>

        <div>
          <img
            src="/public/sos.png"
            alt="School"
            class="rounded-2xl shadow-xl w-full h-[350px] object-cover"
          />
        </div>
      </div>
    </section>

    <!-- Departments Section -->
    <section class="bg-white py-16 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-blue-900 mb-12">Our Departments</h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="department in departments"
            :key="department.name"
            class="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <div class="text-5xl mb-4">{{ department.icon }}</div>
            <h3 class="text-xl font-semibold mb-3 text-blue-800">
              {{ department.name }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ department.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-16 px-6 max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center text-blue-900 mb-12">
        Why Choose SOS TECHNICAL HIGH SCHOOL?
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-blue-900 text-white p-8 rounded-2xl shadow-lg">
          <h3 class="text-2xl font-semibold mb-4">Modern Learning</h3>
          <p>
            Students gain practical experience using modern technology and
            industry-based learning methods.
          </p>
        </div>

        <div class="bg-yellow-400 text-black p-8 rounded-2xl shadow-lg">
          <h3 class="text-2xl font-semibold mb-4">Qualified Teachers</h3>
          <p>
            Our professional teachers guide students with passion, skill, and
            dedication.
          </p>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <h3 class="text-2xl font-semibold mb-4 text-blue-900">
            Career Preparation
          </h3>
          <p class="text-gray-700">
            We prepare learners for careers, entrepreneurship, and university
            education.
          </p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-10 text-center mt-10">
      <h2 class="text-2xl font-bold mb-2">SOS TECHNICAL HIGH SCHOOL</h2>
      <p class="text-gray-400">
        Empowering students with technical knowledge and innovation.
      </p>

      <div class="mt-4 text-sm text-gray-500">
        © 2026 SOS TECHNICAL HIGH SCHOOL. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      departments: [
        {
          name: 'Software Development',
          icon: '💻',
          description:
            'Learn programming, web development, databases, and modern software technologies.'
        },
        {
          name: 'Networking',
          icon: '🌐',
          description:
            'Understand computer networks, internet systems, and communication technologies.'
        },
        {
          name: 'Graphic Design',
          icon: '🎨',
          description:
            'Develop creative skills in branding, digital design, and multimedia production.'
        },
        {
          name: 'Electronics',
          icon: '⚡',
          description:
            'Study electrical systems, electronic devices, and practical engineering concepts.'
        }
      ]
    }
  }
}
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
}

html, body {
  font-family: Arial, Helvetica, sans-serif;
}

</style>

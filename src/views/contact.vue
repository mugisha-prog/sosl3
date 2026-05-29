<template>
  <div class="bg-green-50 min-h-screen flex items-center justify-center p-6">

    <div class="bg-white shadow-2xl rounded-3xl w-full max-w-6xl overflow-hidden grid md:grid-cols-2 relative">

      <!-- GLOBAL TOP RIGHT DROPDOWN -->
      <div class="absolute top-4 right-4 z-10">
      <select
<select
  v-model="selectedLanguage"
  class="px-4 py-3 rounded-xl bg-white text-gray-800 border border-gray-100
         hover:bg-green-100 hover:border-green-500
         focus:outline-none focus:ring-2 focus:ring-green-500
         transition duration-300 cursor-pointer"
>
>
  <option value="en">English</option>
  <option value="fr">French</option>
  <option value="rw">Kinyarwanda</option>
</select>
      </div>

      <!-- LEFT SIDE -->
      <div class="bg-green-700 text-white p-10 flex flex-col justify-center">

        <h1 class="text-5xl font-bold mb-6">
          {{ content.title }}
        </h1>

        <p class="text-green-100 text-lg leading-8">
          {{ content.description }}
        </p>

      </div>

      <!-- RIGHT SIDE (FORM) -->
      <div class="p-10 bg-white flex flex-col justify-center">

        <h2 class="text-4xl font-bold text-gray-800 mb-8">
          {{ content.formTitle }}
        </h2>

        <form class="space-y-6">

          <!-- Name -->
          <div>
            <label class="block mb-2 font-semibold text-gray-700">
              {{ content.nameLabel }}
            </label>

            <input
              type="text"
              :placeholder="content.namePlaceholder"
              class="w-full p-4 border border-gray-300 rounded-2xl
                     focus:outline-none focus:ring-2 focus:ring-green-600
                     hover:border-green-500 transition"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block mb-2 font-semibold text-gray-700">
              {{ content.emailLabel }}
            </label>

            <input
              type="email"
              :placeholder="content.emailPlaceholder"
              class="w-full p-4 border border-gray-300 rounded-2xl
                     focus:outline-none focus:ring-2 focus:ring-green-600
                     hover:border-green-500 transition"
            />
          </div>

          <!-- Message -->
          <div>
            <label class="block mb-2 font-semibold text-gray-700">
              {{ content.messageLabel }}
            </label>

            <textarea
              rows="5"
              :placeholder="content.messagePlaceholder"
              class="w-full p-4 border border-gray-300 rounded-2xl
                     focus:outline-none focus:ring-2 focus:ring-green-600
                     hover:border-green-500 transition"
            ></textarea>
          </div>

          <!-- Button -->
          <button
            type="submit"
            class="w-full bg-green-700 hover:bg-green-800 hover:scale-[1.02]
                   transition duration-300 text-white font-semibold py-4 rounded-2xl"
          >
            {{ content.buttonText }}
          </button>

        </form>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const selectedLanguage = ref("en");

const translations = {
  en: {
    title: "Contact Us",
    description:
      "We would love to hear from you. Feel free to contact us anytime for questions, support, or collaboration.",
    formTitle: "Send Message",
    nameLabel: "Full Name",
    namePlaceholder: "Enter your name",
    emailLabel: "Email Address",
    emailPlaceholder: "Enter your email",
    messageLabel: "Message",
    messagePlaceholder: "Write your message...",
    buttonText: "Send Message",
  },

  fr: {
    title: "Contactez-nous",
    description:
      "Nous aimerions avoir de vos nouvelles. Contactez-nous pour toute question ou assistance.",
    formTitle: "Envoyer un message",
    nameLabel: "Nom complet",
    namePlaceholder: "Entrez votre nom",
    emailLabel: "Adresse e-mail",
    emailPlaceholder: "Entrez votre e-mail",
    messageLabel: "Message",
    messagePlaceholder: "Écrivez votre message...",
    buttonText: "Envoyer",
  },

  rw: {
    title: "Twandikire",
    description:
      "Twishimiye kwakira ubutumwa bwawe. Watwandikira igihe icyo ari cyo cyose.",
    formTitle: "Ohereza ubutumwa",
    nameLabel: "Amazina yawe",
    namePlaceholder: "Andika amazina yawe",
    emailLabel: "Imeyili",
    emailPlaceholder: "Andika imeyili yawe",
    messageLabel: "Ubutumwa",
    messagePlaceholder: "Andika ubutumwa bwawe...",
    buttonText: "Ohereza",
  },
};

const content = computed(() => translations[selectedLanguage.value]);
</script>
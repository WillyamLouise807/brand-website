<template>
  <div class="max-w-screen mx-auto backdrop-blur-sm rounded-xl">
  <form @submit.prevent="submitForm">
    
    <div class="space-y-6 font-gotham">

      <!-- Full Name -->
      <div>
        <label class="block text-sm font-semibold mb-2">
          Full Name <span class="text-red-500">*</span>
        </label>
        <input
          v-model="fullName"
          type="text"
          placeholder="Enter your full name"
          class="w-full px-4 py-3 rounded-md border border-black  focus:ring-2 focus:ring-red-600 focus:border-red-600"
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block text-sm font-semibold mb-2">
          Email <span class="text-red-500">*</span>
        </label>
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          class="w-full px-4 py-3 rounded-md border border-black  focus:ring-2 focus:ring-red-600 focus:border-red-600"
        />
      </div>

      <!-- Phone -->
      <div>
        <label class="block text-sm font-semibold mb-2">
          Phone <span class="text-red-500">*</span>
        </label>
        <input
          v-model="phone"
          type="tel"
          placeholder="Enter your phone number"
          class="w-full px-4 py-3 rounded-md border border-black  focus:ring-2 focus:ring-red-600 focus:border-red-600"
        />
      </div>

      <!-- Message -->
      <div>
        <label class="block text-sm font-semibold mb-2">
          Message <span class="text-red-500">*</span>
        </label>
        <textarea
          v-model="message"
          rows="4"
          placeholder="Write your message..."
          class="w-full px-4 py-3 rounded-md border border-black  focus:ring-2 focus:ring-red-600 focus:border-red-600"
        ></textarea>
      </div>
    </div>

    <!-- Button -->
    <div class="mt-8 flex justify-center mb-10">
      <button
        type="submit"
        class="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
      >
        Submit
      </button>
    </div>
  </form>
</div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const fullName = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')

const submitForm = async () => {
  if (!fullName.value || !email.value || !phone.value || !message.value) {
    alert('Semua field wajib diisi!')
    return
  }

  try {
    const serviceID = 'service_vxriror'
    const templateID = 'template_2jhvey2'
    const userID = 'TtWWzLgnnTcXyOfLc'

    await emailjs.send(
      serviceID,
      templateID,
      {
        from_name: fullName.value,
        from_email: email.value,
        phone: phone.value,
        message: message.value,
        date: new Date().toLocaleString(),
        year: new Date().getFullYear()
      },
      userID
    )

    alert('Pesan berhasil dikirim!')

    fullName.value = ''
    email.value = ''
    phone.value = ''
    message.value = ''

  } catch (error) {
    console.error(error)
    alert('Terjadi kesalahan.')
  }
}
</script>


<style>
.font-gotham {
  font-family: 'Gotham', sans-serif;
}
</style>
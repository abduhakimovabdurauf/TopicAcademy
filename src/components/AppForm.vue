<template>
  <div class="question-form">
    <div class="content">
        <div class="text-content">
          <h2>Savollaringiz qoldimi?</h2>
          <p>
              Ma'lumotlaringizni qoldiring, siz bilan bog'lanib barcha savollaringizga javob beramiz.
          </p>
        </div>
        <form @submit.prevent="submitForm" class="form-content">
          <input
            type="text"
            v-model="name"
            placeholder="Ismingiz"
            class="input-field"
            :class="{ 'input-error': nameError }"
          />
          <div class="phone-input">
            <input
              type="tel"
              v-model="phone"
              placeholder="+998 99-999-9999"
              class="input-field"
              :class="{ 'input-error': phoneError }"
            />
          </div>
          <button type="submit" class="submit-btn">SAVOL BERISH</button>
        </form>
    </div>
    <!-- Xatoliklarni ko'rsatish -->
    <span v-if="nameError" class="error-msg">{{ nameError }}</span>
    <span v-if="phoneError" class="error-msg">{{ phoneError }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const phone = ref('');

const nameError = ref('');
const phoneError = ref('');

const submitForm = () => {
  nameError.value = '';
  phoneError.value = '';

  if (!name.value) {
    nameError.value = 'Iltimos, ismingizni kiriting.';
  } else if (name.value.length < 3) {
    nameError.value = 'Ismingiz 3 ta belgidan uzunroq bo‘lishi kerak.';
  }

  const phoneRegex = /^\+998 \d{2}-\d{3}-\d{4}$/;
  if (!phone.value) {
    phoneError.value = 'Iltimos, telefon raqamingizni kiriting.';
  } else if (!phoneRegex.test(phone.value)) {
    phoneError.value = 'Telefon raqami +998 99-999-9999 formatida bo‘lishi kerak.';
  }

  if (!nameError.value && !phoneError.value) {
    name.value = ''
    phone.value = ''
    alert(`Ismingiz: ${name.value}, Telefon raqamingiz: ${phone.value}`);
  }
};
</script>

<style scoped>

</style>

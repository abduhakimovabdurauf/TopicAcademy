<template>
  <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <div v-if="visible" class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <button class="modal-close-btn" @click="close">&times;</button>
        <transition name="fade" v-if="!submitted">
          <div class="modal-form">
            <h2>O'z malumotlaringizni qoldiring</h2>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Ismingiz:</label>
                <input
                  v-model="form.name"
                  type="text"
                  id="name"
                  required
                  minlength="2"
                  :class="{ 'input-error': errors.name }"
                />
                <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
              </div>

              <div class="form-group">
                <label for="phone">Telefon raqam:</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  id="phone"
                  required
                  pattern="[0-9]{10}"
                  :class="{ 'input-error': errors.phone }"
                />
                <p class="error-message">{{ errors.phone }}</p>
              </div>

              <button type="submit" class="btn">Yuborish</button>
            </form>
          </div>
        </transition>
        <transition v-else name="fade">
          <div class="success-message">
            <h2>Arizangiz muvaffaqiyatli yuborildi!</h2>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  visible: Boolean
});
const emit = defineEmits(['close']);

const form = ref({
  name: '',
  phone: ''
});

const errors = ref({
  name: '',
  phone: ''
});

const submitted = ref(false);

const close = () => {
  emit('close');
  submitted.value = false;
};

const validateForm = () => {
  errors.value = {
    name: '',
    phone: ''
  };
  let valid = true;

  if (!form.value.name || form.value.name.length < 2) {
    errors.value.name = 'Ism kamida 2 ta belgidan iborat bo\'lishi kerak.';
    valid = false;
  }

  if (!form.value.phone || !/^\d{10}$/.test(form.value.phone)) {
    errors.value.phone = 'Telefon raqam 10 ta raqamdan iborat bo\'lishi kerak.';
    valid = false;
  }

  return valid;
};

const submitForm = () => {
  console.log(errors);
  if (validateForm()) {
    submitted.value = true;
    form.value.name = '';
    form.value.phone = '';
    
  } else {
    console.log('Validatsiya muvaffaqiyatsiz.');
  }
};

const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.querySelector('.modal-content').style.transform = 'translateY(-50%)';
};

const enter = (el, done) => {
  setTimeout(() => {
    el.style.transition = 'opacity 0.5s ease';
    el.style.opacity = 1;

    el.querySelector('.modal-content').style.transition = 'transform 0.5s ease';
    el.querySelector('.modal-content').style.transform = 'translateY(0)';
    done();
  });
};

const leave = (el, done) => {
  el.style.transition = 'opacity 0.5s ease';
  el.style.opacity = 0;

  el.querySelector('.modal-content').style.transition = 'transform 0.5s ease';
  el.querySelector('.modal-content').style.transform = 'translateY(-50%)';

  setTimeout(() => {
    done();
  }, 500);
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999999;
  cursor: pointer;
  opacity: 0;
}

.modal-content {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 90%;
  max-width: 500px;
  cursor: default !important;
  transform: translateY(-50%);
}

.modal-close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  font-weight: 800;
  outline: none !important;
  color: rgb(70, 70, 70);
  cursor: pointer;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

.input-error {
  border: 1px solid red;
}

.error-message {
  color: red;
  font-size: 0.875em;
  margin-top: 0.25em;
}

.btn {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: #418e8b;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

.success-message {
  text-align: center;
  font-size: 1.5rem;
  animation: fadeIn 1s ease-in-out;
}

/* Animatsiya effektlari */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

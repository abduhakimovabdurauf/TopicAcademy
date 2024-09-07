<template>
  <div class="faq">
    <p class="course__title">
      {{ t('faqTitle') }}
    </p>
    <div class="faq__wrapper">
      <div v-for="(accordion, index) in accordions" :key="index" :class="['accordion', { open: accordion.isOpen }]">
        <div class="accordion__header" @click="toggleAccordion(index)">
          <p class="accordion__title">
            {{ accordion.title }}
          </p>
          <div :class="['accordion__close', { rotated: accordion.isOpen }]"></div>
        </div>
        <div class="accordion__content">
          <p class="accordion__text">
            {{ accordion.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, reactive, watchEffect } from 'vue';

const i18n = inject('i18n');
const t = (key) => i18n.global.t(key);

const accordions = reactive([
  { title: '', text: '', isOpen: false },
  { title: '', text: '', isOpen: false },
  { title: '', text: '', isOpen: false },
  { title: '', text: '', isOpen: false },
  { title: '', text: '', isOpen: false }
]);

watchEffect(() => {
  accordions.forEach((accordion) => {
    accordion.title = t('accordionTitle');
    accordion.text = t('accordionText');
  });
});

const toggleAccordion = (index) => {
  accordions.forEach((accordion, i) => {
    if (i !== index) {
      accordion.isOpen = false;
    }
  });
  accordions[index].isOpen = !accordions[index].isOpen;
};
</script>

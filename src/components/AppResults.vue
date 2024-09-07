<!-- Parent Component -->
<template>
  <div class="result">
    <p class="result__title">
      {{ t('resultTitle') }}
    </p>
    <app-marquee scrollDirection="left"></app-marquee>
    <app-marquee scrollDirection="right" style="margin-top:40px;"></app-marquee>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import AppMarquee from './AppMarquee.vue';

const i18n = inject('i18n');
const t = (key) => i18n.global.t(key);
</script>

<style>
/* You can add styles here for the parent */
</style>

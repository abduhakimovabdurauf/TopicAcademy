<template>
  <div class="help">
    <p class="help__title">
        {{ t('HelpTitle') }}
    </p>
    <div class="help__wrapper">
        <div class="help__left">
            <p class="help__subtitle">
                {{ t('HelpSubtitle') }}
            </p>

            <p class="help__comment">
                {{ t('HelpComment') }}
            </p>

            <button class="btn help__btn" @click="openModal">{{ t('HelpBtnText') }}</button>
        </div>
        <div class="help__right">
            <app-marquee scrollDirection="left"></app-marquee>
        </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, inject } from 'vue';
import AppMarquee from './AppMarquee.vue';


const emit = defineEmits(['openModal']);
const i18n = inject('i18n');
const t = (key) => i18n.global.t(key);

const openModal = () => {
  emit('openModal');
};
</script>


<style>

</style>
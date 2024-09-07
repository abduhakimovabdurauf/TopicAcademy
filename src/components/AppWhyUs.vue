<template>
  <div class="about">
    <p class="course__title">
        {{ t('WhyUsTitle') }}
    </p>

    <div class="about__wrapper">
        <div class="about__card">
            <div class="about__card--index">
                {{ t('WhyUsCard-1.index') }}
            </div>
            <p class="about__card--title">
                {{ t('WhyUsCard-1.title') }}
            </p>
            <p class="about__card--text">
                {{ t('WhyUsCard-1.text') }}
            </p>
        </div>
        <div class="about__card">
            <div class="about__card--index">
                {{ t('WhyUsCard-2.index') }}
            </div>
            <p class="about__card--title">
                {{ t('WhyUsCard-2.title') }}
            </p>
            <p class="about__card--text">
                {{ t('WhyUsCard-2.text') }}
            </p>
        </div>
        <div class="about__card">
            <div class="about__card--index">
                {{ t('WhyUsCard-3.index') }}
            </div>
            <p class="about__card--title">
                {{ t('WhyUsCard-3.title') }}
            </p>
            <p class="about__card--text">
                {{ t('WhyUsCard-3.text') }}
            </p>
        </div>
        <div class="about__card">
            <div class="about__card--index">
                {{ t('WhyUsCard-4.index') }}
            </div>
            <p class="about__card--title">
                {{ t('WhyUsCard-4.title') }}
            </p>
            <p class="about__card--text">
                {{ t('WhyUsCard-4.text') }}
            </p>
        </div>
        <div class="about__card">
            <div class="about__card--index">
                {{ t('WhyUsCard-5.index') }}
            </div>
            <p class="about__card--title">
                {{ t('WhyUsCard-5.title') }}
            </p>
            <p class="about__card--text">
                {{ t('WhyUsCard-5.text') }}
            </p>
        </div>
        <div class="about__card">
            <div class="about__card--index">
                {{ t('WhyUsCard-6.index') }}
            </div>
            <p class="about__card--title">
                {{ t('WhyUsCard-6.title') }}
            </p>
            <p class="about__card--text">
                {{ t('WhyUsCard-6.text') }}
            </p>
        </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import AppMarquee from './AppMarquee.vue';

const i18n = inject('i18n');
const t = (key) => i18n.global.t(key);
</script>

<style>

</style>
<template>
  <div class="course">
    <p class="course__title">
        {{ t('CourseTitle') }}
    </p>

    <div class="course__wrapper">
        <div class="course__card">
            <div class="course__card--image">
                <img src="../assets/images/1.png" alt="">
            </div>
            <div class="course__card--header">
                <p class="course__card--title">
                    {{ t('CourseCard-1.CardTitle') }}
                </p>
                <div class="course__card--badge">
                    {{ t('CourseCard-1.CardBadge') }}
                </div>
            </div>
            <div class="course__card--text">
                {{ t('CourseCard-1.CardText') }}
            </div>
            <div class="course__card--bottom">   
                <button class="btn course__btn" @click="openModal">{{ t('CourseCard-1.CardBtn') }}</button>
                <p class="course__card--price">
                    {{ t('CourseCard-1.CardPrice') }}
                </p>
            </div>
        </div>
        <div class="course__card">
            <div class="course__card--image">
                <img src="../assets/images/1.png" alt="">
            </div>
            <div class="course__card--header">
                <p class="course__card--title">
                    {{ t('CourseCard-2.CardTitle') }}
                </p>
                <div class="course__card--badge">
                    {{ t('CourseCard-2.CardBadge') }}
                </div>
            </div>
            <div class="course__card--text">
                {{ t('CourseCard-2.CardText') }}
            </div>
            <div class="course__card--bottom">   
                <button class="btn course__btn" @click="openModal">{{ t('CourseCard-1.CardBtn') }}</button>
                <p class="course__card--price">
                    {{ t('CourseCard-2.CardPrice') }}
                </p>
            </div>
        </div>
        <div class="course__card">
            <div class="course__card--image">
                <img src="../assets/images/1.png" alt="">
            </div>
            <div class="course__card--header">
                <p class="course__card--title">
                    {{ t('CourseCard-3.CardTitle') }}
                </p>
                <div class="course__card--badge">
                    {{ t('CourseCard-3.CardBadge') }}
                </div>
            </div>
            <div class="course__card--text">
                {{ t('CourseCard-3.CardText') }}
            </div>
            <div class="course__card--bottom">   
                <div class="btn course__btn" @click="openModal">{{ t('CourseCard-1.CardBtn') }}</div>
                <p class="course__card--price">
                    {{ t('CourseCard-3.CardPrice') }}
                </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, inject } from 'vue';

const emit = defineEmits(['openModal']);
const i18n = inject('i18n');
const t = (key) => i18n.global.t(key);

const openModal = () => {
  emit('openModal');
};
</script>

<style>

</style>
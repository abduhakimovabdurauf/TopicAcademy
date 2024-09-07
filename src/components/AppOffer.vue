<template>
    <div class="offer">
        <p class="offer__title">{{ t('offerTitle') }}</p>
        <div class="offer__card--wrapper">
            <div class="offer__card">
                <div class="offer__card--img">
                    <img src="../assets/images/chat.png" alt="">
                </div>
                <p class="offer__card--text">
                    {{ t('offerText1') }}
                </p>
            </div>
            <div class="offer__card">
                <div class="offer__card--img">
                    <img src="../assets/images/rocket.png" alt="">
                </div>
                <p class="offer__card--text">
                    {{ t('offerText2') }}
                </p>
            </div>
            <div class="offer__card">
                <div class="offer__card--img">
                    <img src="../assets/images/money.png" alt="">
                </div>
                <p class="offer__card--text">
                    {{ t('offerText3') }}
                </p>
            </div>
            <div class="offer__card">
                <div class="offer__card--img">
                    <img src="../assets/images/bag.png" alt="">
                </div>
                <p class="offer__card--text">
                    {{ t('offerText4') }}
                </p>
            </div>
            <div class="offer__card">
                <div class="offer__card--img">
                    <img src="../assets/images/target.png" alt="">
                </div>
                <p class="offer__card--text">
                    {{ t('offerText5') }}
                </p>
            </div>
            <div class="offer__card">
                <div class="offer__card--img">
                    <img src="../assets/images/key.png" alt="">
                </div>
                <p class="offer__card--text">
                    {{ t('offerText6') }}
                </p>
            </div>
        </div>
        <button class="btn offer__btn--text" @click="openModal">{{ t('offerBtn') }}</button>
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
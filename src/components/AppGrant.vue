<template>
    <div class="grant">
        <p class="grant__title">
            {{ t('grantTitle') }}
        </p>
        <div class="grant__wrapper">
            <div class="wrapper__left">
                <img src="../assets/images/grant.png" alt="oops">
            </div>
            <div class="wrapper__right">
                <div class="wrapper__block">
                    <p class="wrapper__title">
                        {{ t('grantListFirstTitle') }}
                    </p>
                    <p class="wrapper__text">
                        {{ t('grantListFirstText') }}
                    </p>
                </div>

                <div class="wrapper__block">
                    <p class="wrapper__title">
                        {{ t('grantListSecondTitle') }}
                    </p>
                    <ul class="wrapper__list">
                        <li>
                            {{ t('GrantListFirst') }}
                        </li>
                        <li>
                            {{ t('GrantListSecond') }}
                        </li>
                        <li>
                            {{ t('GrantListThird') }}
                        </li>
                    </ul>
                </div>
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
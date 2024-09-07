<template>
  <div class="intruduction">
    <p class="intruduction__comment">
        {{ t('intruductionCommeny') }}
    </p>
    <div class="intruduction__title">
        {{ t('intruductionTitle') }}
    </div>
    <div class="intruduction__offer--wrapper">
        <div class="intruduction__offer">
            <img src="../assets/images/barg.png" alt="">
            <p class="intruduction__offer--text first">
                {{ t('intruductionOffer1') }}
            </p>
        </div>
        <div class="intruduction__offer">
            <img src="../assets/images/barg.png" alt="">
            <p class="intruduction__offer--text second">
                {{ t('intruductionOffer2') }}
            </p>
        </div>
    </div>
    <div class="intruduction__btn">
        <button class="btn" @click="$emit('scrollToCourses')">
            <a class="intruduction__btn--link">
                {{ t('intruductionBtn') }}
            </a>
        </button>
        <p class="intruduction__btn--text">{{ t('intruductionBtnComment') }}</p>
    </div>
  </div>
</template>

<script>
import { inject } from "vue"
export default {
    setup(){
        const i18n = inject('i18n')
        const t = (key) => i18n.global.t(key)


        return {
            t
        }
    }
}
</script>

<style>

</style>
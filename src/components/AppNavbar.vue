<template>
  <nav class="navbar">
    <div class="navbar__about">
      <div class="navbar__logo">
        <img class="navbar__logo-img" src="@/assets/images/logo.png" alt="Topik Academy Logo">
      </div>
      <div class="navbar__comment">
        <p class="navbar__text">{{ t('comment') }}</p>
      </div>
    </div>

    <div class="navbar--menu__btn">
      <img src="./icons/menu.svg" alt="Menu" @click="show">
    </div>
    <div ref="menu" class="navbar__mobil--side">
      <ul class="navbar__links">
        <li class="navbar__item"><a class="navbar__link" href="#" @click="$emit('scrollToWhyUs')">{{ t('whyUs') }}</a></li>
        <li class="navbar__item"><a class="navbar__link" href="#" @click="$emit('scrollToResults')">{{ t('results') }}</a></li>
        <li class="navbar__item"><a class="navbar__link" href="#" @click="$emit('scrollToCourses')">{{ t('courses') }}</a></li>
        <li class="navbar__item"><a class="navbar__link" href="#" @click="$emit('scrollToQuestions')">{{ t('faq') }}</a></li>
      </ul>
      <div class="navbar__dropdown">
        <p class="navbar__dropdown-btn" @click="toggleDropdown">{{ language }}</p>
        <ul class="navbar__dropdown-menu" :class="{ 'is-active': dropdownOpen }">
          <li @click="changeLanguage('uz')">O'zbek</li>
          <li @click="changeLanguage('ru')">Русский</li>
          <li @click="changeLanguage('en')">English</li>
        </ul>
      </div>
      <div class="navbar__contact">
        <p class="navbar__phone">+998 (33) 306 0098</p>
        <p class="navbar__cta">{{ t('callUs') }}</p>
      </div>
    </div>
    
  </nav>
</template>

<script>
import { ref, inject, defineComponent, onUnmounted } from 'vue'

export default defineComponent({
  setup() {
    const i18n = inject('i18n')
    const menu = ref(null)
    const dropdownOpen = ref(false)
    const language = ref("O'zbek")
    const iconSrc = ref("./icons/menu.svg")
    
    const t = (key) => i18n.global.t(key)
    
    const changeLanguage = (lang) => {
      i18n.global.locale = lang
      language.value = lang === "uz" ? "O'zbek" : lang === "ru" ? "Русский" : "English"
      dropdownOpen.value = false
    }

    const toggleDropdown = () => {
      dropdownOpen.value = !dropdownOpen.value
    }

    const show = () => {
      if (menu.value) {
        if (menu.value.style.top === "-1000px") {
          menu.value.style.top = "150px"
        } else {
          menu.value.style.top = "-1000px"
        }
      }
    }

    const handleClickOutside = (event) => {
      const dropdownMenu = document.querySelector('.navbar__dropdown-menu')
      if (dropdownMenu && !dropdownMenu.contains(event.target) && !event.target.matches('.navbar__dropdown-btn')) {
        dropdownOpen.value = false
      }
    }

    document.addEventListener('click', handleClickOutside)

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
    })

    return {
      t,
      changeLanguage,
      dropdownOpen,
      language,
      toggleDropdown,
      show,
      iconSrc,
      menu
    }
  }
});
</script>

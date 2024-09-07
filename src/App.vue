<template>
  <div>
    <AppNavbar
     @scrollToWhyUs="scrollToWhyUs"
     @scrollToResults="scrollToResults"
     @scrollToCourses="scrollToCourses"
     @scrollToQuestions="scrollToQuestions"
    ></AppNavbar>
    <AppIntruduction @scrollToCourses="scrollToCourses"></AppIntruduction>
    <AppOffer @openModal="openModal"></AppOffer>
    <AppResults ref="resultsComponent"></AppResults>
    <AppGrant></AppGrant>
    <AppHelp @openModal="openModal"></AppHelp>
    
    <!-- Bu yerga scroll qilish kerak -->
    <AppCourses ref="coursesComponent" @openModal="openModal"></AppCourses>
    
    <AppAbout ref="whyUsComponent"></AppAbout>
    <AppFaq ref="faqComponent"></AppFaq>
    <AppForm></AppForm>
    <AppFooter></AppFooter>
    <AppModal :visible="isModalVisible" @close="closeModal"></AppModal>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import AppNavbar from "./components/AppNavbar.vue";
import AppIntruduction from './components/AppIntruduction.vue';
import AppOffer from './components/AppOffer.vue';
import AppResults from './components/AppResults.vue';
import AppGrant from './components/AppGrant.vue';
import AppHelp from './components/AppHelp.vue';
import AppCourses from './components/AppCourses.vue';
import AppAbout from './components/AppWhyUs.vue';
import AppFaq from './components/AppFaq.vue';
import AppModal from './components/AppModal.vue';
import AppForm from './components/AppForm.vue'
import AppFooter from './components/AppFooter.vue'

const isModalVisible = ref(false);
const modalType = ref('');
const coursesComponent = ref(null); // Courses uchun ref
const resultsComponent = ref(null);
const whyUsComponent = ref(null);
const faqComponent = ref(null);
const openModal = (type) => {
  modalType.value = type;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
  modalType.value = '';
};

const scrollToWhyUs = () => {
  if (whyUsComponent.value) {
    whyUsComponent.value.$el.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToResults = () => {
  if (resultsComponent.value) {
    resultsComponent.value.$el.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToCourses = () => {
  if (coursesComponent.value) {
    coursesComponent.value.$el.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToQuestions = () => {
  if (faqComponent.value) {
    faqComponent.value.$el.scrollIntoView({ behavior: 'smooth' });
  }
};

</script>
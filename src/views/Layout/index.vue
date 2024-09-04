<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { useCategoryStore } from '@/stores/categoryStore.js'
//触发获取导航列表的action
const categoryStore = useCategoryStore()
categoryStore. getCategory()
</script>

<template>
  <LayoutFixed></LayoutFixed>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>

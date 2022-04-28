<script>
import {
  RouterLink,
  RouterView
} from 'vue-router'
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <header>
    <Navbar />
  </header>

  <router-view v-slot="{ Component }">
    <XyzTransition xyz="fade up-2" mode="out-in">
      <component :is="Component" />
    </XyzTransition>
  </router-view>
</template>
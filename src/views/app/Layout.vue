<template>
  <div class="app">
    <AppHeader/>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import { accountService } from "@/_services";

export default {
  name: "App",
  components: {
    AppHeader
  },
};
</script>
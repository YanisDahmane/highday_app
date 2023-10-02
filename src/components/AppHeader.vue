<template>
  <nav>
    <router-link to="/app/events/new">New Event</router-link>
    <button @click="logout()">Logout</button>
  </nav>
</template>
<script>
import { accountService } from "@/_services";
import router from "@/router";
export default {
  name: "AppHeader",
  methods: {
    logout() {
      accountService.logout();
      router.push("/login");
    }
  }
};
</script>
<template>
  <div class="app">

  </div>
</template>

<script>
import { eventService } from "@/_services";

export default {
  name: "Dashboard",
  mounted(){
    eventService.getAll()
        .then(events => {
          console.log(events);
        })
        .catch(err => {
          console.log(err);
        });

  }
};
</script>
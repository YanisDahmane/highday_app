<template>
  <event-list :events="events"></event-list>
</template>

<script>
import { eventService } from "@/_services";
import EventList from "@/components/EventList.vue";

export default {
  name: "Dashboard",
  components: {
    EventList
  },
  data(){
    return {
      events: []
    }
  },
  mounted(){
    eventService.getAll()
        .then(events => {
          this.events = events;
        })
        .catch(err => {
          console.log(err);
        });
  }
};
</script>
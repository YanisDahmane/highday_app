<template>
  <div class="all-events">
    <div class="card" v-for="(event, index) in events" :key="index">
      <event-card :event="event"></event-card>
    </div>
  </div>
</template>
<script>
import EventCard from "./EventCard.vue";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  props: {
    events: {
      type: Object,
      required: true
    }
  }
}
</script>
<template>
  <date-selector :actualDay="date" @date-changed="updateDate"></date-selector>
  <h1>Liste des évènements</h1>
  <h2>{{ date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}}</h2>
  <event-list :events="events"></event-list>
  <router-link to="/app/events/new" id="add-event">
    Create event
  </router-link>
</template>

<script>
import { eventService } from "@/_services";
import EventList from "@/components/EventList.vue";
import DateSelector from "@/components/DateSelector.vue";

export default {
  name: "Dashboard",
  components: {
    DateSelector,
    EventList
  },
  data(){
    return {
      events: [],
      date: new Date()
    }
  },
  mounted(){
    this.loadEvent();
  },
  methods: {
    updateDate(date) {
      this.date = date;
      this.loadEvent();
    },
    loadEvent(){
      eventService.getAll(this.date)
          .then(events => {
            this.events = events;
          })
          .catch(err => {
            console.log(err);
          });
    }
  }
};
</script>

<style>
#add-event {
  position: absolute;
  background-color: #42b983;
  padding: 4vw;
  text-align: center;
  vertical-align: center;
  border-radius: 500px;
  bottom: 4vh;
  right: 4vh;
}
</style>
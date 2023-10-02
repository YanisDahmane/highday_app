<template>
  <div>
    <h1>Create new Event</h1>
    <form @submit.prevent="create">
      <div class="formGroup">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="event.title" required />
      </div>
      <div class="formGroup">
        <label for="description">Description</label>
        <input type="text" id="description" v-model="event.description" required />
      </div>
      <div class="formGroup">
        <label for="start_at">Start</label>
        <input type="date" id="start_at" v-model="event.start_at" required/>
      </div>
      <div class="formGroup">
        <label for="end_at">End</label>
        <input type="date" id="end_at" v-model="event.end_at" required/>
      </div>
      <div class="formGroup">
        <button type="submit">Create Event</button>
      </div>
    </form>
  </div>
</template>

<script>
import { eventService } from "@/_services";

export default {
  name: "EventNew",
  data(){
    return {
      event: {
        title:'',
        description:'',
        start_at:'',
        end_at:'',
      }
    }
  },
  methods: {
    create() {
      eventService.create(this.event)
          .then(response => {
            this.$router.push('/app/dashboard')
          })
          .catch(error => console.log(error));
    }
  },
};
</script>

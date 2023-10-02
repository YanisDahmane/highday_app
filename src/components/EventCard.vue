<template>
  <router-link :to="'/app/events/' + event.id">
    <div class="card-body">
      <h5 class="card-title">{{ event.title }}</h5>
      <p class="card-text">{{ event.description }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.card {
  margin-bottom: 20px;
  background-color: #42b983;
  border-radius: 8px;
}

a {
  color: black;
  text-decoration: none;
}
</style>

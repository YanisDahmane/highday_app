<template>
    <div class="card-body">
      <h5 class="card-title">{{ event.title }}</h5>
      <p class="card-text">{{ event.description }}</p>
    </div>
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

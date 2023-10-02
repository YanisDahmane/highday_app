<template>
  <div>
    <p>Show Event</p>
    <div class="card-body">
      <h5 class="card-title">{{ event.title }}</h5>
      <p class="card-text">{{ event.description }}</p>
      <p>Start : {{event.start_at}}</p>
      <p>End : {{event.end_at}}</p>
      <p>Createur : {{ ownerName }} </p>
      <div class="members" v-for="(member, index) in members" :key="index">
        <member-card :member="member"></member-card>
      </div>
      <button class="btn btn-primary" @click="destroy" v-if="showDeleteButton">Delete Event</button>
    </div>
  </div>
</template>

<script>
import { eventService } from "@/_services";
import MemberCard from "@/components/MemberCard.vue";
import { accountService } from '@/_services'
export default {
  name: "EventShow",
  components: {
    MemberCard
  },
  data() {
    return {
      eventId: null,
      event: {},
      members: [],
      showDeleteButton: false,
      ownerName: ""
    };
  },
  mounted() {
    this.eventId = this.$route.params.id;
    eventService.get(this.eventId)
        .then(event => {
          this.event = event;
          this.members = event.members;
          this.showDeleteButton = event.owner_id === accountService.getId();
          this.ownerName = `${event.owner.firstname} ${event.owner.lastname}`
        })
        .catch(err => {
          console.log(err);
        });
  },
  methods: {
    destroy() {
      eventService.destroy(this.eventId)
          .then(() => {
            this.$router.push("/app/dashboard");
          })
          .catch(err => {
            console.log(err);
          });
    },
  }
};
</script>

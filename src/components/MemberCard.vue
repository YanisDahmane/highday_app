<template>
    <div class="member-card">
      <h5 class="member-name">{{ `${member.firstname} ${member.lastname}` }}</h5>
    </div>
</template>

<script>
export default {
  name: "MemberCard",
  props: {
    member: {}
  }
}
</script>
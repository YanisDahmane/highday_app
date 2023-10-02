<template>
  <div class="select-date">
    <div id="previus-day" @click="setPreviousDay">
      {{ this.previousDay.getDate() }}
    </div>
    <div id="current-day">
      {{ this.actualDay.getDate() }}
    </div>
    <div id="next-day" @click="setNextDay">
      {{ this.nextDay.getDate() }}
    </div>
  </div>
</template>

<script>
export default {
  name: "DateSelector",
  props: {
    actualDay: Date
  },
  data() {
    return {
      actualDay: new Date(),
      previousDay: new Date(),
      nextDay: new Date()
    };
  },
  mounted() {
    this.setAllDays();
  },
  methods: {
    setNextDay() {
      this.actualDay = new Date(this.actualDay.setDate(this.actualDay.getUTCDate() + 1));
      this.setAllDays();
    },
    setPreviousDay() {
      this.actualDay = new Date(this.actualDay.setDate(this.actualDay.getUTCDate() - 1));
      this.setAllDays();
    },
    setAllDays() {
      this.previousDay = new Date(this.previousDay.setDate(this.actualDay.getUTCDate() - 1));
      this.nextDay = new Date(this.nextDay.setDate(this.actualDay.getUTCDate() + 1));
      this.$emit("date-changed", this.actualDay);
    },
  }
}
</script>

<style>
.select-date {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #f5f5f5;
    border-radius: 5px;
    padding: 0 10px;
    margin-bottom: 20px;
  }
  .select-date div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .select-date div:hover {
    cursor: pointer;
    background-color: #e0e0e0;
  }

</style>

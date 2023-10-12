<template>
  <div class="select-date">
    <div id="previus-day" class="selector" @click="setPreviousDay">
      {{ this.previousDay.getDate() }}
    </div>
    <div id="current-day">
      {{ this.actualDay.getDate() }}
    </div>
    <div id="next-day" class="selector" @click="setNextDay">
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
    height: 80px;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  .select-date .selector {
    background-color: #42b983;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22vw;
    height: 100%;
    border-radius: 16px;
  }

  .select-date #current-day {
    border: 5px solid #aee7cd;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22vw;
    height: 100%;
    border-radius: 16px;
  }
  .select-date div:hover {
    cursor: pointer;
  }

</style>

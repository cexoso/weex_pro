<template>
  <div>
    <text>
      日历
    </text>
    <calendar :month="month" :year="year" :itemStyle="itemStyle" />
  </div>
  
</template>
<script>
import Calendar from "./calendar";
export default {
  components: {
    Calendar
  },
  data() {
    const currentDate = new Date();
    return {
      month: currentDate.getMonth(),
      year: currentDate.getFullYear()
    };
  },
  methods: {
    itemStyle(y, m, d) {
      return d % 2 && { color: "red" };
    }
  }
};
</script>

<style>
.red {
  color: blue;
}
</style>

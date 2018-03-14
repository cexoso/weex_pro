<template>
  <div>
    <text>
      日历
    </text>
    <calendar :month="month" :year="year" />
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
    }
  }
};
</script>

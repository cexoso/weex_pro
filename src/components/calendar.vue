<template>
  <div>
    <div class="calendar_day_row" v-for="(arr, key) in days" :key="key">
      <text class="calendar_day_col" :class="itemCls(year, month, day)" v-for="(day) in arr" :key="day">
        {{day}}
      </text>
    </div>
  </div>
</template>
<script>
import { getMaxDay, chunk } from "./c";
export default {
  props: {
    year: Number,
    month: Number,
    itemCls: {
      type: Function,
      default: () => ''
    }
  },
  computed: {
    days() {
      const maxDay = getMaxDay(this.year, this.month)
      const allDays = Array.from({length: maxDay}).map((_, k) => k + 1)
      return chunk(allDays, 7)
    }
  }
};
</script>

<style scoped>
  .calendar_day_row{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .calendar_day_col{
    width: 14.28%;
    height: 80px;
    line-height: 80px;
    white-space: nowrap;
    text-align: center;
  }
</style>

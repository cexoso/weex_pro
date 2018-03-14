<template>
  <div>
      <div class="calendar_header">
          <text class="calendar_header_year">2018</text>
          <text class="calendar_header_month">/1月</text>
      </div>
    <div class="calendar_day_row" v-for="(arr, key) in days" :key="key">
      <text class="calendar_day_col" :style="itemStyle(year, month, day)" v-for="(day) in arr" :key="day">
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
    itemStyle: {
      type: Function,
      default: () => ""
    }
  },
  computed: {
    days() {
      const maxDay = getMaxDay(this.year, this.month);
      const allDays = Array.from({ length: maxDay }).map((_, k) => k + 1);
      return chunk(allDays, 7);
    }
  }
};
</script>

<style scoped>
    .calendar_header{
        flex-direction: row;
        align-items: baseline;
        background-color: #1dbe8c;
    }
    .calendar_header_year,
    .calendar_header_month{
        color: #fff;
    }
    .calendar_header_year{
        font-size: 30px;
        font-weight: bold;
    }
    .calendar_header_month{
        font-size: 12px;
    }
  .calendar_day_row{
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

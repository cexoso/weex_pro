<template>
  <div>
      <div class="calendar_header">
          <text class="calendar_header_year">2018</text>
          <text class="calendar_header_month">/1月</text>
      </div>
      <div class="calender_header_week">
          <text class="calendar_week">一</text>
          <text class="calendar_week">二</text>
          <text class="calendar_week">三</text>
          <text class="calendar_week">四</text>
          <text class="calendar_week">五</text>
          <text class="calendar_week">六</text>
          <text class="calendar_week">日</text>
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
        -webkit-flex-direction: row;
        align-items: flex-end;
        -webkit-align-items: flex-end;
        padding: 30px 60px;
        background-color: #1dbe8c;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    .calendar_header_year,
    .calendar_header_month{
        color: #fff;
    }
    .calendar_header_year{
        font-size: 40px;
        font-weight: bold;
    }
    .calendar_header_month{
        font-size: 24px;
    }
    .calender_header_week{
        flex-direction: row;
        -webkit-flex-direction: row;
    }
    .calendar_week{
        flex: 1;
        -webkit-flex: 1;
        text-align: center;
        line-height: 60px;
    }
  .calendar_day_row{
    flex-direction: row;
      -webkit-flex-direction: row;
  }
    .calendar_day_col{
        flex: 1;
        -webkit-flex: 1;
        text-align: center;
        line-height: 20px;
    }
</style>

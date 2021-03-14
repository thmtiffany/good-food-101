<template>
  <div class="chart">
    <h1>Bar Chart</h1>
    <chart></chart>
  </div>
</template>

<script>
import Chart from "./BarChart.js";
export default {
  components: {
    Chart
  }
};
</script>

<style scoped>
h1{
  text-align: center;
  font-size: 30px;
  background-color: rgba(205, 92, 92, 0.8);
  padding: 20px;
  color:ivory;
}
</style>
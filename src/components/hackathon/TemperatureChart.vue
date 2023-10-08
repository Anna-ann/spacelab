// src/components/TemperatureChart.vue
<template>
  <div>
    <h2>Temperature Chart</h2>
    <line-chart :data="chartData" :options="chartOptions"></line-chart>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Temperature',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            data: [10, 15, 18, 22, 25], // Add your temperature data here
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>

<style scoped>
.section-title {
  font-size: 24px;
  margin-bottom: 20px;
}

/* Additional styling for the temperature chart, adjust as needed */
</style>

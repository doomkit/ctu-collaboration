<template>
  <RadarChart :data="data" :options="options" />
</template>

<script>
import RadarChart from '../Charts/RadarChart';
export default {
  components: {
    RadarChart
  },
  data() {
    return {
      data: {
        labels: ['Param1', 'Param2', 'Param3', 'Param4', 'Param5', 'Param6', 'Param7', 'Param8'],
        datasets: [
          {
            label: '1',
            backgroundColor: 'rgba(131, 187, 214, 0.3)',
            borderColor: '#1D84B5',
            pointBackgroundColor: '#1D84B5',
            lineTension: 0.4,
            data: [8, 7, 4, 7, 3, 7, 4, 6]
          },
          {
            label: '2',
            backgroundColor: 'rgba(206, 45, 79, 0.3)',
            borderColor: '#CE2D4F',
            pointBackgroundColor: '#CE2D4F',
            lineTension: 0.4,
            data: [4, 6, 8, 5, 4, 2, 5, 9]
          }
        ]
      },
      options: {
        tooltips: {
          opacity: 0.1
        },
        legend: {
          display: false
        },
        scale: {
          ticks: {
            max: 10,
            beginAtZero: true
          },
          gridLines: { circular: true }
        }
      }
    };
  }
};
</script>

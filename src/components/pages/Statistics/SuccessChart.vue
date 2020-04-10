<template>
  <RadarChart :data="data" :options="options" :chart_id="'' + random()" />
</template>

<script>
import RadarChart from '../Charts/PercentCircle';

export default {
  components: {
    RadarChart
  },
  data() {
    return {
      data: {
        labels: ['Param1', 'Param2'],
        datasets: [
          {
            data: [85, 15],
            backgroundColor: ['#3ec556', 'rgba(0,0,0,0)'],
            hoverBackgroundColor: ['#3ec556', 'rgba(0,0,0,0)'],
            borderWidth: [0, 0]
          }
        ]
      },
      options: {
        cutoutPercentage: 88,
        animation: {
          animationRotate: true,
          duration: 2000
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        }
      }
    };
  },
  methods: {
    random() {
      return Math.round(Math.random() * 1000);
    }
  }
};
</script>

<template>
  <RadarChart :data="data" :options="options" />
</template>

<script>
import axios from 'axios';
import { env } from '../../../environment/env';
import RadarChart from '../Charts/RadarChart';

export default {
  components: {
    RadarChart
  },
  data() {
    return {
      data: undefined,
      options: {
        tooltips: {
          opacity: 0.1,
          displayColors: false,
          callbacks: {
            title: function() {}
          }
        },
        legend: {
          display: false
        },
        scale: {
          pointLabels: {
            fontFamily: "'Avenir', Helvetica, Arial, sans-serif",
            fontSize: 13
          },
          ticks: {
            max: 10,
            beginAtZero: true,
            stepSize: 2
          },
          gridLines: { circular: true }
        }
      }
    };
  },
  created() {
    axios.get(`${env.base_url}/statistics/avg-profile`).then(response => {
      if (!response || !response.data) {
        return;
      }
      let labels = [];
      let values = [];
      for (let key in response.data) {
        labels = [...labels, key];
        values = [...values, response.data[key]];
      }
      this.data = {
        labels,
        datasets: [
          {
            backgroundColor: 'rgba(131, 187, 214, 0.3)',
            borderColor: '#1D84B5',
            pointBackgroundColor: '#1D84B5',
            lineTension: 0.4,
            data: values
          }
        ]
      };
    });
  }
};
</script>

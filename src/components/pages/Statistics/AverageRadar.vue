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
  props: {
    locale: String
  },
  watch: {
    locale: function() {
      let labels = this.translateLabels();
      let datasets = this.data.datasets;
      this.data = {
        labels,
        datasets
      };
    }
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
        },
        layout: {
          padding: {
            left: 10,
            right: 10
          }
        }
      },
      labels: []
    };
  },
  created() {
    axios.get(`${env.base_url}/statistics/avg-profile`).then(response => {
      if (!response || !response.data) {
        return;
      }
      this.$emit('params', response.data);
      let labels = [];
      let values = [];
      for (let key in response.data) {
        labels = [...labels, key];
        values = [...values, response.data[key]];
      }
      this.labels = labels;
      this.data = {
        labels: this.translateLabels(labels),
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
  },
  methods: {
    translateLabels() {
      let params = [];
      if (this.locale === 'cz') {
        this.labels.forEach(elem => {
          params = [...params, this.$t(`statistics.params.${elem}`)];
        });
        return params;
      }
      return this.labels;
    }
  }
};
</script>

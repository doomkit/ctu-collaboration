<template>
  <div class="flex flex-row">
    <BarChart :data="data" :options="options" style="height: 100%; width: 100%" />
  </div>
</template>

<script>
import axios from 'axios';
import { env } from '../../../environment/env';
import BarChart from '../Charts/BarChart';

export default {
  components: {
    BarChart
  },
  data() {
    return {
      data: null,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                beginAtZero: true,
                fontFamily: "'Avenir', Helvetica, Arial, sans-serif",
                fontSize: 13,
                stepSize: 1
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                fontFamily: "'Avenir', Helvetica, Arial, sans-serif",
                fontSize: 12,
                lineHeight: 1
              }
            }
          ]
        },
        legend: {
          display: false
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            title: function(tooltipItem, data) {
              let title = data['labels'][tooltipItem[0]['index']];
              let type = Object.prototype.toString.call(title).slice(8, -1);
              if (type === 'Array') {
                return title.reduce((a, b) => a + ' ' + b);
              }
              return title;
            },
            label: function(tooltipItem, data) {
              return data['datasets'][0]['data'][tooltipItem['index']];
            }
          }
        }
      }
    };
  },
  created() {
    axios.get(`${env.base_url}/statistics/type-count`).then(response => {
      let types = [
        'education',
        'management',
        'research projects',
        'commercial projects',
        'employee mobility',
        'student mobility',
        'short-term cooperation'
      ];
      let values = [];
      for (let i = 0; i < types.length; i++) {
        values = [...values, response.data[types[i]] ? response.data[types[i]] : 0];
      }
      this.data = this.getData(values);
    });
  },
  methods: {
    getData(values) {
      return {
        labels: [
          'education',
          'management',
          ['research', 'projects'],
          ['commercial', 'projects'],
          ['employee', 'mobility'],
          ['student', 'mobility'],
          ['short-term', 'cooperation']
        ],
        datasets: [
          {
            label: 'Dataset 1',
            backgroundColor: '#1D84B5',
            categoryPercentage: 1,
            barPercentage: 0.7,
            borderWidth: 0,
            data: values
          }
        ]
      };
    }
  }
};
</script>

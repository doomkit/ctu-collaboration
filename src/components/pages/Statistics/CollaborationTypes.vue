<template>
  <div class="flex flex-row">
    <BarChart :data="data" :options="options" style="height: 100%; width: 100%" />
  </div>
</template>

<script>
import axios from 'axios';
import BarChart from '../Charts/BarChart';

export default {
  components: {
    BarChart
  },
  props: {
    locale: String
  },
  watch: {
    locale: function() {
      this.data = this.getData();
    }
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
      },
      values: []
    };
  },
  created() {
    axios.get(`${process.env.VUE_APP_API}/statistics/type-count`).then(response => {
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
      this.values = values;
      this.data = this.getData();
    });
  },
  methods: {
    getData() {
      let labels_en = [
        'education',
        'management',
        ['research', 'projects'],
        ['commercial', 'projects'],
        ['employee', 'mobility'],
        ['student', 'mobility'],
        ['short-term', 'cooperation']
      ];
      let labels_cz = [
        'výuka',
        'management',
        ['výzkumné', 'projekty'],
        ['komerční', 'projekty'],
        ['mobilita', 'zaměstnanců'],
        ['mobilita', 'studentů'],
        ['krátkodobá', 'spolupráce']
      ];
      return {
        labels: this.locale === 'en' ? labels_en : labels_cz,
        datasets: [
          {
            label: 'Dataset 1',
            backgroundColor: '#1D84B5',
            categoryPercentage: 1,
            barPercentage: 0.7,
            borderWidth: 0,
            data: this.values
          }
        ]
      };
    }
  }
};
</script>

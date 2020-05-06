<template>
  <div class="w-full sm:w-5/12 flex flex-col justify-between">
    <h3 class="text-2xl">{{ $t(`results.${type}`) }} <span class="text-red-700">*</span></h3>
    <p class="mb-2">
      <span class="text-gray-600">{{ $t('results.type') }}: </span>
      <span class="font-bold">{{ $t('results.types.' + data.corresponding_type) }}</span>
    </p>
    <div class="flex flex-row justify-center items-center text-sm">
      <div class="w-6 h-2 bg-teal-300 mr-2 inline-block"></div>
      {{ $t(`results.your_${type}`) }}
    </div>
    <div class="flex flex-row justify-center items-center text-sm">
      <div class="w-6 h-2 bg-gray-500 mr-2 inline-block"></div>
      {{ $t('results.avg_profile') }}
    </div>
    <RadarChart :data="chartData" :options="options" />
    <div class="flex">
      <span class="text-red-700 mr-2">*</span>
      <p class="mb-4">
        {{ $t(`results.info_${type}`) }}
      </p>
    </div>
  </div>
</template>

<script>
import RadarChart from '../../../shared/charts/radar-chart';

export default {
  components: {
    RadarChart
  },
  props: {
    data: Object,
    avgProfile: Object,
    type: String,
    locale: String
  },
  watch: {
    locale: function() {
      this.updateChart();
    }
  },
  mounted() {
    this.getProfileDataset();
    this.updateChart();
  },
  data() {
    return {
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
      chartData: undefined,
      profile: undefined
    };
  },
  methods: {
    translateLabels() {
      let params = [];
      if (this.locale === 'cz') {
        this.avgProfile.labels.forEach(elem => {
          params = [...params, this.$t(`statistics.params.${elem}`)];
        });
        return params;
      }
      return this.avgProfile.labels;
    },
    updateChart() {
      this.chartData = {
        labels: this.translateLabels(),
        datasets: [this.getProfileDataset(), this.avgProfile.dataset]
      };
    },
    getProfileDataset() {
      let values = [];
      this.avgProfile.labels.forEach(key => {
        values = [...values, this.data[key]];
      });
      return {
        backgroundColor:
          this.type === 'primary' ? 'rgba(29,132,181, 0.15)' : 'rgba(129,230,217, 0.3)',
        borderColor: this.type === 'primary' ? '#1D84B5' : '#81e6d9',
        pointBackgroundColor: this.type === 'primary' ? '#1D84B5' : '#81e6d9',
        lineTension: 0.4,
        data: values
      };
    }
  }
};
</script>

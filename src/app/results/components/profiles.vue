<template>
  <div v-if="data_primary && data_secondary" class="container m-auto px-4 pb-4 lg:px-16">
    <div class="test container rounded shadow-xl p-8 pb-2 bg-white mx-auto mb-8">
      <div class="mb-6">
        <p v-if="complete_date">
          <span class="w-40 inline-block">{{ $t('results.completed') }}:</span> {{ complete_date }}
        </p>
        <p v-if="duration">
          <span class="w-40 inline-block">{{ $t('results.duration') }}:</span> {{ duration }}
        </p>
      </div>
      <div class="flex flex-row justify-between flex-wrap">
        <div class="w-full sm:w-5/12 flex flex-col justify-between">
          <div class="-mb-6">
            <h3 class="text-2xl">
              {{ $t('results.primary') }}
            </h3>
            <p v-if="primary_type" class="mb-2">
              {{ $t('results.type') }}:
              <span class="font-bold">{{ $t('results.types.' + primary_type) }}</span>
            </p>
            <div class="flex flex-row justify-center items-center text-sm">
              <div class="w-6 h-2 bg-blue-500 mr-2 inline-block"></div>
              {{ $t('results.your_primary') }}
            </div>
            <div class="flex flex-row justify-center items-center text-sm">
              <div class="w-6 h-2 bg-gray-500 mr-2 inline-block"></div>
              {{ $t('results.avg_profile') }}
            </div>
          </div>

          <RadarChart :data="data_primary" :options="options" />
        </div>
        <div class="w-full sm:w-5/12 flex flex-col justify-between">
          <div class="-mb-6">
            <h3 class="text-2xl">
              {{ $t('results.secondary') }}
            </h3>
            <p v-if="secondary_type" class="mb-2">
              {{ $t('results.type') }}:
              <span class="font-bold">{{ $t('results.types.' + secondary_type) }}</span>
            </p>
            <div class="flex flex-row justify-center items-center text-sm">
              <div class="w-6 h-2 bg-teal-300 mr-2 inline-block"></div>
              {{ $t('results.your_secondary') }}
            </div>
            <div class="flex flex-row justify-center items-center text-sm">
              <div class="w-6 h-2 bg-gray-500 mr-2 inline-block"></div>
              {{ $t('results.avg_profile') }}
            </div>
          </div>

          <RadarChart :data="data_secondary" :options="options" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

import RadarChart from '../../../shared/charts/radar-chart';

export default {
  components: {
    RadarChart
  },
  props: {
    locale: String,
    result_id: String
  },
  watch: {
    locale: function() {
      this.updateDatasets();
    }
  },
  data() {
    return {
      primary_dataset: undefined,
      secondary_dataset: undefined,
      avg_dataset: undefined,
      data_primary: undefined,
      data_secondary: undefined,
      primary_type: undefined,
      secondary_type: undefined,
      complete_date: undefined,
      duration: undefined,
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
  mounted() {
    this.getAvgProfile(this.getResultProfiles);
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
    },
    getAvgProfile(callback) {
      axios.get(`${process.env.VUE_APP_API}/statistics/avg-profile`).then(response => {
        if (!response || !response.data) {
          return;
        }
        let labels = [];
        let values = [];
        for (let key in response.data) {
          labels = [...labels, key];
          values = [...values, response.data[key]];
        }
        this.labels = labels;
        this.avg_dataset = {
          backgroundColor: 'transparent',
          borderColor: '#a0aec0',
          pointBackgroundColor: '#a0aec0',
          lineTension: 0.4,
          data: values
        };
        callback();
      });
    },
    getResultProfiles() {
      axios
        .get(`${process.env.VUE_APP_API}/results/${this.result_id}`)
        .then(response => {
          this.$emit('comments', response.data.comments);
          this.$emit('loaded', true);
          this.calculateDuration(response.data.start_date, response.data.complete_date);
          this.primary_type = response.data.primary_profile.corresponding_type;
          this.secondary_type = response.data.secondary_profile.corresponding_type;
          let values_primary = [];
          let values_secondary = [];
          this.labels.forEach(key => {
            values_primary = [...values_primary, response.data.primary_profile[key]];
            values_secondary = [...values_secondary, response.data.secondary_profile[key]];
          });
          this.primary_dataset = {
            backgroundColor: 'rgba(29,132,181, 0.15)',
            borderColor: '#1D84B5',
            pointBackgroundColor: '#1D84B5',
            lineTension: 0.4,
            data: values_primary
          };
          this.secondary_dataset = {
            backgroundColor: 'rgba(129,230,217, 0.3)',
            borderColor: '#81e6d9',
            pointBackgroundColor: '#81e6d9',
            lineTension: 0.4,
            data: values_secondary
          };
          this.updateDatasets();
        })
        .catch(error => {
          console.error(error);
          this.$router.push({ path: '/not-found' });
        });
    },
    updateDatasets() {
      this.data_primary = {
        labels: this.translateLabels(this.labels),
        datasets: [this.primary_dataset, this.avg_dataset]
      };
      this.data_secondary = {
        labels: this.translateLabels(this.labels),
        datasets: [this.secondary_dataset, this.avg_dataset]
      };
    },
    calculateDuration(start, end) {
      this.complete_date = moment(end).format('MMM DD YYYY, hh:mm');
      this.duration = moment.utc(moment(end).diff(moment(start))).format('HH:mm:ss');
    }
  }
};
</script>

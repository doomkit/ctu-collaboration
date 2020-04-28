<template>
  <div class="bg-gray-100">
    <div class="container m-auto px-4 py-20 lg:px-16">
      <div class="flex justify-between">
        <h1 class="text-4xl font-semibold text-left inline-block pt-8 pb-4">
          {{ $t('statistics.title') }}
        </h1>
      </div>
      <p class="text-left lg:text-lg mb-8">
        {{ $t('statistics.subtitle') }}
      </p>
      <div class="test container rounded shadow-xl p-8 bg-white mx-auto mb-8">
        <h2 class="text-2xl">{{ $t('statistics.profile') }}</h2>
        <div class="flex flex-row justify-around flex-wrap">
          <div class="w-full sm:w-5/12 sm:mr-2 mb-8 sm:mb-0">
            <AverageRadar v-on:params="onParams" :locale="$i18n.locale" />
          </div>
          <div class="w-full sm:w-5/12 sm:ml-2 flex flex-col justify-between">
            <div>
              <h3 class="my-2">
                {{ $t('statistics.avg_duration') }}<span class="text-red-600">*</span>:
              </h3>
              <div class="bg-gray-200 text-gray-700 rounded py-2 px-4">
                <span>{{ avg_duration }}</span>
              </div>
              <h3 class="my-2">{{ $t('statistics.completed') }}</h3>
              <div class="bg-gray-200 text-gray-700 rounded py-2 px-4">
                <span>{{ total }}</span>
              </div>
              <h3 class="my-2">{{ $t('statistics.last') }}</h3>
              <div class="bg-gray-200 text-gray-700 rounded py-2 px-4">
                <span>{{ last_completion }}</span>
              </div>
            </div>
            <div class="text-gray-500 text-sm">
              <p>* {{ $t('statistics.duration') }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="test container flex flex-col lg:flex-row mx-auto">
        <div class="flex flex-col rounded shadow-xl p-8 bg-white mb-8 lg:mr-8 lg:mb-0 lg:w-2/3">
          <h2 class="text-lg">{{ $t('statistics.types') }}</h2>
          <CollaborationTypes :locale="$i18n.locale" />
        </div>
        <div class="flex flex-col justify-center rounded shadow-xl p-8 bg-white lg:w-1/3">
          <SuccessChart :readiness="readiness" />
          <h2 class="text-center text-lg pt-4">{{ $t('statistics.score') }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import axios from 'axios';

import AverageRadar from './Statistics/AverageRadar';
import SuccessChart from './Statistics/SuccessChart';
import CollaborationTypes from './Statistics/CollaborationTypes';

export default {
  components: {
    AverageRadar,
    SuccessChart,
    CollaborationTypes
  },
  data() {
    return {
      avg_duration: null,
      total: null,
      last_completion: null,
      readiness: 0
    };
  },
  async created() {
    axios.get(`${process.env.VUE_APP_API}/statistics/avg-time-spent`).then(response => {
      let min = Math.floor(response.data.avg_duration / 60);
      let sec = response.data.avg_duration % 60;
      this.avg_duration = (min < 10 ? '0' : '') + min + ':' + (sec < 10 ? '0' : '') + sec;
      this.total = response.data.total;
      this.last_completion = moment(response.data.last_completion).format('MMM DD YYYY, hh:mm');
    });
  },
  methods: {
    onParams(values) {
      let res = 0;
      for (let key in values) {
        res = res + values[key];
      }
      this.readiness = Math.round((res / 7) * 10);
    }
  }
};
</script>

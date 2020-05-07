<template>
  <div>
    <PercentCircle :value="rate" />
    <h2 class="text-center text-lg pt-4 mb-4">{{ $t('statistics.rate') }}</h2>
    <p class="text-center text-sm">{{ $t('statistics.rate_text') }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import PercentCircle from '../../../shared/charts/percent-circle.vue';

export default {
  components: {
    PercentCircle
  },
  data() {
    return {
      rate: 0
    };
  },
  mounted() {
    axios.get(`${process.env.VUE_APP_API}/statistics/profiles`).then(response => {
      this.rate = this.calculateSuccessRate(response.data);
    });
  },
  methods: {
    calculateSuccessRate(profiles) {
      let counter = profiles.length;
      let successfulCounter = 0;
      profiles
        .map(el => {
          delete el.primary_profile_id;
          return el;
        })
        .forEach(element => {
          let badCounter = 0;
          for (let param in element) {
            if (element[param] < 5) badCounter++;
          }
          if (badCounter < 3) successfulCounter++;
        });
      const successRate = Math.round((successfulCounter / counter) * 100);
      return successRate;
    }
  }
};
</script>

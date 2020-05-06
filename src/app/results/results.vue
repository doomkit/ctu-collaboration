<template>
  <main class="bg-gray-100 py-10 min-h-screen">
    <ResultsLink :link="link" />
    <div v-if="loaded" class="container m-auto px-4 pb-4 lg:px-16">
      <div class="test container rounded shadow-xl p-8 pb-2 bg-white mx-auto mb-8">
        <ResultInfo :startDate="data.start_date" :completeDate="data.complete_date" />
        <div class="flex flex-row justify-between flex-wrap">
          <Profile
            v-if="data && data.primary_profile"
            :type="'primary'"
            :avgProfile="avgProfile"
            :data="data.primary_profile"
            :locale="$i18n.locale"
          />
          <Profile
            v-if="data && data.primary_profile"
            :type="'secondary'"
            :avgProfile="avgProfile"
            :data="data.secondary_profile"
            :locale="$i18n.locale"
          />
        </div>
      </div>
    </div>

    <Comments v-if="data && data.comments" :items="data.comments" />
  </main>
</template>

<script>
import axios from 'axios';

import ResultsLink from './components/result-link';
import ResultInfo from './components/result-info';
import Profile from './components/profile';
import Comments from './components/comments/comments';

export default {
  components: {
    ResultsLink,
    ResultInfo,
    Profile,
    Comments
  },
  data() {
    return {
      link: (process.env.VUE_APP_API + '/results/' + this.$route.params.id).replace('api/', ''),
      avgProfile: undefined,
      data: undefined,
      comments: undefined,
      loaded: false
    };
  },
  mounted() {
    axios.get(`${process.env.VUE_APP_API}/statistics/avg-profile`).then(response => {
      if (response && response.data) {
        this.setAvgProfile(response.data);
      }
      // Get Results
      axios
        .get(`${process.env.VUE_APP_API}/results/${this.$route.params.id}`)
        .then(response => {
          this.data = response.data;
          this.loaded = true;
        })
        .catch(error => {
          console.error(error);
          this.$router.push({ path: '/not-found' });
        });
    });
  },
  methods: {
    setAvgProfile(data) {
      let labels = [];
      let values = [];
      for (let key in data) {
        labels = [...labels, key];
        values = [...values, data[key]];
      }
      this.avgProfile = {
        dataset: {
          backgroundColor: 'transparent',
          borderColor: '#a0aec0',
          pointBackgroundColor: '#a0aec0',
          lineTension: 0.4,
          data: values
        },
        labels: labels
      };
    }
  }
};
</script>

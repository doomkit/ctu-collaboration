<template>
  <main class="bg-gray-100 my-10 min-h-screen">
    <ResultsHeader v-if="loaded" :link="link" />
    <Profiles
      :locale="$i18n.locale"
      :result_id="this.$route.params.id"
      v-on:loaded="onLoaded"
      v-on:comments="onComments"
    />
    <Comments :items="comments" />
  </main>
</template>

<script>
import ResultsHeader from './components/results-header';
import Profiles from './components/profiles';
import Comments from './components/comments';

export default {
  components: {
    ResultsHeader,
    Profiles,
    Comments
  },
  data() {
    return {
      link: (process.env.VUE_APP_API + '/results/' + this.$route.params.id).replace('api/', ''),
      comments: undefined,
      loaded: false
    };
  },
  methods: {
    onLoaded(loaded) {
      this.loaded = loaded;
    },
    onComments(comments) {
      this.comments = comments;
    }
  }
};
</script>

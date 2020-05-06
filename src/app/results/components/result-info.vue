<template>
  <div>
    <p v-if="complete_date">
      <span class="w-40 inline-block">{{ $t('results.completed') }}:</span> {{ complete_date }}
    </p>
    <p v-if="duration">
      <span class="w-40 inline-block">{{ $t('results.duration') }}:</span> {{ duration }}
    </p>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    startDate: String,
    completeDate: String
  },
  data() {
    return {
      complete_date: undefined,
      duration: undefined
    };
  },
  mounted() {
    this.complete_date = moment(this.startDate).format('MMM DD YYYY, hh:mm');
    this.duration = moment
      .utc(moment(this.completeDate).diff(moment(this.startDate)))
      .format('HH:mm:ss');
  }
};
</script>

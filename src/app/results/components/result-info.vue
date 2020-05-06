<template>
  <div class="flex justify-between flex-wrap">
    <div class="w-full sm:w-4/12 mb-6 pt-2 flex justify-start">
      <div v-if="complete_date" class="flex flex-col mr-6">
        <span>{{ $t('results.completed') }}:</span>
        <span>{{ $t('results.duration') }}:</span>
      </div>
      <div v-if="duration" class="flex flex-col">
        <span class="rounded text-gray-600">{{ complete_date }}</span>
        <span class="rounded text-gray-600">{{ duration }}</span>
      </div>
    </div>
    <div class="w-full sm:w-1/2 mb-6">
      <p class="text-gray-600 rounded bg-gray-200 py-2 px-3 border-l-4 border-blue-500">
        {{ $t('results.info') }}
        <router-link to="/statistics">
          <span class="text-gray-700 font-medium">{{
            $t('results.statistics')
          }}</span> </router-link
        >.
      </p>
    </div>
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

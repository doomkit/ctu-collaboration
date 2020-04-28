<template>
  <PercentCircle :value="readiness" />
</template>

<script>
import PercentCircle from '../../../shared/charts/percent-circle.vue';

export default {
  components: {
    PercentCircle
  },
  props: {
    readiness: Number
  }
};
</script>

<template>
  <PercentCircle :value="readiness" />
</template>

<script>
import PercentCircle from '../Charts/PercentCircle';

export default {
  components: {
    PercentCircle
  },
  props: {
    readiness: Number
  }
};
</script>

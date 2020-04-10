<template>
  <div class="progress flex flex-row">
    <div class="relative m-auto rounded-full bg-gray-300 h-4 w-full">
      <div
        class="absolute top-0 left-0 m-auto rounded-full bg-blue-600 h-4"
        :style="{ width: progress + '%' }"
      ></div>
    </div>
    <span class="ml-4">{{ count }}/{{ total }}</span>
  </div>
</template>

<script>
export default {
  props: {
    count: Number,
    total: Number
  },
  data() {
    return {
      progress: 0
    };
  },
  updated() {
    this.progress = this.count / (this.total / 100);
  }
};
</script>

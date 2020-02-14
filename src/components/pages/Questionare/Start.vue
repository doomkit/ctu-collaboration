<template>
  <div style="height: 368px" class="flex flex-col justify-center items-center">
    <button
      class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
      @click="start()"
    >
      Start
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    start() {
      this.$emit('start', true);
    }
  }
};
</script>

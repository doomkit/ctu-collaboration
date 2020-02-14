<template>
  <div>
    <h2 class="text-xl text-left my-8 mx-8">
      {{ question.text }}
    </h2>
    <ol class="mx-8">
      <li v-for="option in question.options" :key="option.id">
        <label class="flex mb-4 cursor-pointer p-2">
          <input
            type="radio"
            name="test"
            class="absolute opacity-0 cursor-pointer"
            :value="option.id"
            v-model="selected"
          />
          <template v-if="option.id === selected">
            <span>
              <i class="fas fa-check-circle text-2xl text-blue-600"></i>
            </span>
          </template>
          <template v-else>
            <span>
              <i class="far fa-circle text-2xl text-blue-400"></i>
            </span>
          </template>
          <span class="ml-4">{{ option.text }}</span>
        </label>
      </li>
    </ol>
    <div class="flex justify-end mt-8">
      <button
        class="text-white font-bold py-2 px-4 mr-4 rounded focus:outline-none"
        :class="[
          firstQuestion ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
        ]"
        :disabled="firstQuestion"
        @click="previous()"
      >
        <i class="fas fa-chevron-left mr-2"></i> Previous
      </button>
      <button
        class="text-white font-bold py-2 px-4 rounded focus:outline-none"
        :class="[
          selected === -1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
        ]"
        :disabled="selected === -1"
        @click="next()"
      >
        Next <i class="fas fa-chevron-right ml-2"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: Object,
    firstQuestion: Boolean
  },
  data() {
    return {
      selected: -1
    };
  },
  methods: {
    next() {
      this.$emit('next', this.selected);
    },
    previous() {
      this.$emit('previous');
    }
  }
};
</script>

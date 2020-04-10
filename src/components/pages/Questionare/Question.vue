<template>
  <div>
    <h2 class="text-xl font-medium text-center mt-4 mb-8 mx-8">Question {{ index + 1 }}</h2>
    <p class="text-lg text-left mb-8 mx-8">
      {{ question.text }}
    </p>
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
    <div class="flex justify-center sm:justify-end mt-8">
      <button
        class="text-white font-bold py-2 px-4 mr-4 rounded focus:outline-none"
        :class="[index === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700']"
        :disabled="index === 0"
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
    answer: Number,
    index: Number
  },
  data() {
    return {
      selected: -1
    };
  },
  created() {
    if (this.answer >= 0 && this.answer < this.question.options.length) {
      this.selected = this.answer;
    }
  },
  methods: {
    next() {
      this.$emit('next', { question: this.question, answer: this.selected });
    },
    previous() {
      this.$emit('previous');
    }
  }
};
</script>

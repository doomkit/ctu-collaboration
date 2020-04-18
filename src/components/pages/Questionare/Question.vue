<template>
  <div v-if="state" v-on:keyup.enter="next()">
    <h2 class="text-xl font-medium text-center mt-0 md:mt-4 mb-4 md:mb-8 mx-8 ">
      {{ $t('test.question') }} {{ state.answers ? state.answers.length + 1 : 1 }}
    </h2>
    <p v-if="state.question" class="text-lg text-left mb-8 md:mx-8">
      {{ $i18n.locale === 'en' ? state.question.content_en : state.question.content_cz }}
    </p>

    <ol v-if="state.question" class="md:mx-8">
      <li v-for="option in state.question.answers" :key="option.id">
        <label class="flex mb-2 md:mb-4 cursor-pointer p-2">
          <input
            type="radio"
            name="test"
            class="absolute opacity-0 cursor-pointer"
            :value="option"
            v-model="selected"
          />
          <template v-if="selected && option.id === selected.id">
            <span>
              <i class="fas fa-check-circle text-2xl text-blue-600"></i>
            </span>
          </template>
          <template v-else>
            <span>
              <i class="far fa-circle text-2xl text-blue-400"></i>
            </span>
          </template>
          <span v-if="option" class="ml-4">
            {{ $i18n.locale === 'en' ? option.content_en : option.content_cz }}
          </span>
        </label>
      </li>
    </ol>
    <div class="flex justify-center sm:justify-end mt-8">
      <button
        class="text-white font-bold py-2 px-4 rounded focus:outline-none"
        :class="[!selected ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700']"
        :disabled="!selected"
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
    state: Object
  },
  data() {
    return {
      selected: null
    };
  },
  methods: {
    next() {
      if (this.selected) {
        this.$emit('next', { state: this.state, answer: this.selected });
        this.selected = null;
      }
    }
  }
};
</script>

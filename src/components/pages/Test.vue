<template>
  <div class="bg-gray-100">
    <div class="container m-auto px-4 py-20 lg:px-16">
      <div class="flex justify-between">
        <h1 class="text-4xl font-semibold text-left inline-block pt-8 pb-4">
          {{ $t('test.title') }}
        </h1>
        <div class="hidden sm:flex flex-col justify-center font-medium text-blue-700">
          <span>~10 min <i class="far fa-clock"></i></span>
        </div>
      </div>
      <p class="text-left lg:text-lg mb-2">
        {{ $t('test.text') }}
      </p>
      <p class="text-left lg:text-lg mb-8">
        {{ $t('test.text_2') }} <span class="font-bold">{{ $t('test.anonymusly') }}.</span>
      </p>

      <div
        class="test flex flex-col justify-center container rounded shadow-xl p-6 md:p-8 bg-white mx-auto"
      >
        <transition
          name="fade"
          mode="out-in"
          @beforeLeave="beforeLeave"
          @enter="enter"
          @afterEnter="afterEnter"
        >
          <Start v-if="!state" @start="startTest()" />
          <div v-else-if="state && !state.finished">
            <Question
              v-if="state"
              :state="state"
              @next="onNext($event)"
              @previous="onPrevoius($event)"
            />
          </div>
          <ShowResults v-else :id="state.result_str_id" />
        </transition>
      </div>
      <button
        class="text-white font-light text-sm py-2 mt-4 rounded focus:outline-none bg-transparent"
        :class="[!state ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:text-blue-700']"
        :disabled="!state"
        @click="restartTest()"
      >
        <i class="fas fa-redo"></i> Restart test
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import { env } from '../../environment/env';

import Start from './Questionare/Start';
import Question from './Questionare/Question';
import ShowResults from './Questionare/ShowResults';

export default {
  components: {
    Start,
    Question,
    ShowResults
  },
  data() {
    return {
      state: null,
      prevHeight: 0
    };
  },
  created() {
    let state = sessionStorage.getItem('state');
    if (state) {
      this.state = JSON.parse(state);
    }
  },
  methods: {
    startTest() {
      this.updateState({ start_time: moment.now() });
      this.loadQuestion();
    },
    onNext({ state, answer }) {
      if (!state.answers) {
        state.answers = [];
      }
      let check = !!state.answers.find(a => a.question_id === answer.question_id);
      if (!check) {
        state.answers = [...state.answers, answer];
        this.updateState(state);
      }
      this.loadQuestion();
    },
    loadQuestion() {
      axios.post(`${env.base_url}/test`, this.state).then(response => {
        this.state = response.data;
        if (this.state.end_time) {
          this.state.finished = true;
        }
        this.updateState(this.state);
      });
    },
    updateState(state) {
      this.state = state;
      sessionStorage.setItem('state', JSON.stringify(state));
    },
    restartTest() {
      const en_confirm_text = 'Are you sure you want to start over?';
      const cz_confirm_text = 'Opravdu chcete začít znovu?';
      let confirmed = confirm(this.$i18n.locale === 'en' ? en_confirm_text : cz_confirm_text);
      if (confirmed) {
        sessionStorage.removeItem('state');
        this.state = null;
      }
    },
    // Animations
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    }
  }
};
</script>

<style scoped lang="scss">
.test {
  min-height: 350px;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

<template>
  <div class="container m-auto p-4 px-4 md:px-16">
    <div class="flex justify-between">
      <h1 class="text-4xl font-semibold text-left inline-block">Collaboration Test</h1>
      <div class="hidden sm:flex flex-col justify-center text-blue-700">
        <span>~10 min <i class="far fa-clock"></i></span>
      </div>
    </div>
    <p class="text-left mb-8">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestias, officia quis
      expedita minus perspiciatis id eos recusandae!
    </p>

    <div class="test container rounded shadow-xl p-8 bg-white mx-auto">
      <Start v-if="!started" @start="started = true" />
      <div v-if="started">
        <Progress />
        <Question
          :question="questions[0]"
          :firstQuestion="true"
          @next="onNext($event)"
          @prevoius="onPrevoius($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Start from './Questionare/Start';
import Progress from './Questionare/Progress';
import Question from './Questionare/Question';

export default {
  components: {
    Start,
    Progress,
    Question
  },
  data() {
    return {
      questions: [],
      started: false
    };
  },
  created() {
    axios.get('http://localhost:3000/questions').then(response => (this.questions = response.data));
  },
  methods: {
    onNext(option_id) {
      console.log(option_id);
    },
    onPrevoius() {
      console.log('Previous');
    }
  }
};
</script>

<style scoped lang="scss">
.test {
  min-height: 400px;
}
</style>

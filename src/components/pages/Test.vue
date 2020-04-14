<template>
  <div class="bg-gray-100">
    <div class="container m-auto px-4 py-20 lg:px-16">
      <div class="flex justify-between">
        <h1 class="text-4xl font-semibold text-left inline-block pt-8 pb-4">Collaboration Test</h1>
        <div class="hidden sm:flex flex-col justify-center font-medium text-blue-700">
          <span>~10 min <i class="far fa-clock"></i></span>
        </div>
      </div>
      <p class="text-left lg:text-lg mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestias, officia quis
        expedita minus perspiciatis id eos recusandae!
      </p>

      <div class="test container rounded shadow-xl p-8 bg-white mx-auto">
        <Start v-if="!started" @start="started = true" />
        <div v-if="started">
          <Progress :total="questions.length" :count="answers.length" />
          <Question
            :question="questions[currentIndex]"
            :index="currentIndex"
            @next="onNext($event)"
            @previous="onPrevoius($event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import Start from './Questionare/Start';
import Progress from '../shared/Progress';
import Question from './Questionare/Question';

export default {
  components: {
    Start,
    Progress,
    Question
  },
  data() {
    return {
      questions: Object,
      currentIndex: 0,
      questionId: 0,
      answers: [],
      started: false
    };
  },
  created() {
    const _answers = JSON.parse(sessionStorage.getItem('answers'));
    console.log(_answers);
    if (_answers) {
      this.answers = _answers;
    }
    // axios.get('http://localhost:3000/questions').then(response => (this.questions = response.data));
  },
  methods: {
    onNext(option) {
      this.saveAnswer(this.questionId, option.answer);
      if (this.currentIndex + 1 >= this.questions.length) {
        // Show results
        return;
      }
      this.currentIndex++;
    },
    onPrevoius() {
      if (this.currentIndex - 1 < 0) {
        return;
      }
      this.currentIndex--;
    },
    saveAnswer(question_id, option_id) {
      const answer = { question_id, option_id };
      this.answers = [...this.answers, answer];
      console.log(this.answers);
      sessionStorage.setItem('answers', JSON.stringify(this.answers));
    }
    // (answeredIds, questions) {
    //   return questions.filter(question => {
    //     return !!answeredIds.find(id => id === question.id);
    //   });
    // }
  }
};
</script>

<style scoped lang="scss">
.test {
  min-height: 400px;
}
</style>

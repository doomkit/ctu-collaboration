<template>
  <div class="container rounded shadow-xl p-8 bg-white mx-auto mb-8">
    <p class="mb-4">
      Parametry spolupráce jsou klíčové faktory, které ovlivňují proces spolupráce. Celkem při
      výběru dvou vhodných typů spolupráce se v úvahu berou 7 následujících parametrů:
    </p>
    <div v-for="item in params" :key="item" class="text-sm mb-2">
      <span class="font-semibold text-blue-600">{{ $t(`statistics.params.${item}`) }}</span>
      <span> — {{ $t(`statistics.params_description.${item}`) }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      params: [
        'communication',
        'experience',
        'expectations',
        'knowledge',
        'people',
        'resources',
        'specificity'
      ]
    };
  }
};
</script>

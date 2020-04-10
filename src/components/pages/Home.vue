<template>
  <div>
    <Welcome />
    <Section :alternativeBackground="false" />
  </div>
</template>

<script>
import Welcome from './Home/Welcome';
import Section from './Home/Section';

export default {
  components: {
    Welcome,
    Section
  }
};
</script>

<style scoped lang="scss"></style>

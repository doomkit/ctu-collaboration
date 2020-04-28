<template>
  <main>
    <Project />
    <Contacts />
  </main>
</template>

<script>
import Contacts from './components/contacts';
import Project from './components/project';

export default {
  components: {
    Contacts,
    Project
  }
};
</script>

<style scoped lang="scss">
main {
  width: 100%;
  h1 {
    line-height: 300px;
  }
}
</style>

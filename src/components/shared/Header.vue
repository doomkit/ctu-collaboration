<template>
  <header>
    <p>This is Header component!</p>
    <nav>
      <span v-for="(link, index) in links" :key="link.path" :index="index">
        <router-link :to="link.path">{{ link.text }}</router-link>
        {{ index === links.length - 1 ? '' : ' | ' }}
      </span>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { path: '/', text: 'Home' },
        { path: '/test', text: 'Test' },
        { path: '/statistics', text: 'Statistics' },
        { path: '/about', text: 'About' }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
header {
  background-color: #c7ceea;
  width: 100%;
  p {
    line-height: 70px;
  }
}
</style>

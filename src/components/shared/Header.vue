<template>
  <div>
    <header class="fixed top-0 left-0 w-full z-10 flex items-center bg-white shadow-md">
      <nav class="container p-2 mx-auto flex items-center justify-between flex-wrap lg:px-16">
        <div class="mr-6">
          <img
            class="h-10 w-auto select-none cursor-pointer"
            src="../../../src/assets/logo.png"
            alt="logo"
          />
        </div>
        <div class="block lg:hidden">
          <button
            class="flex items-center px-3 py-2 border 
								rounded border-blue-700 hover:border-blue-900
								text-blue-700 hover:text-blue-900 focus:outline-none"
            v-on:click="toggleMenu()"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <!-- prettier-ignore-attribute -->
        <div
          :class="{ 'hidden': !show_menu }"
          class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm text-center lg:flex-grow" @click="show_menu = false">
            <router-link
              v-for="link in links"
              :key="link.path"
              v-slot="{ href, route, navigate, isActive }"
              :to="link.path"
              exact
            >
              <a
                class="block mt-4 lg:mr-4 text-center text-base lg:inline-block lg:mt-0
										text-blue-700 hover:text-blue-900"
                :class="{ 'font-bold': isActive }"
                :href="href"
                @click="navigate"
              >
                {{ $t(link.text) }}
              </a>
            </router-link>
          </div>
          <div class="flex flex-row justify-center mt-4 lg:mt-0 lg:mr-0">
            <img
              v-for="(lang, index) in languages"
              :key="lang.locale"
              :index="index"
              :class="{ 'ml-5': index !== 0 }"
              class="h-6 w-auto select-none cursor-pointer rounded"
              :src="$root.$i18n.locale == lang.locale ? lang.img : lang.disable_img"
              :alt="lang.locale"
              v-on:click="selectLanguage(lang.locale)"
            />
          </div>
        </div>
      </nav>
    </header>
    <button
      v-if="show_menu"
      @click="show_menu = false"
      class="fixed top-0 right-0 bottom-0 left-0 h-full w-full bg-black opacity-50 z-0"
    ></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        {
          locale: 'cz',
          img: require('../../assets/languages/cz.jpeg'),
          disable_img: require('../../assets/languages/cz_disabled.jpeg')
        },
        {
          locale: 'en',
          img: require('../../assets/languages/uk.jpeg'),
          disable_img: require('../../assets/languages/uk_disabled.jpeg')
        }
      ],
      links: [
        { path: '/', text: 'navbar.home' },
        { path: '/test', text: 'navbar.test' },
        { path: '/statistics', text: 'navbar.statistics' },
        { path: '/about', text: 'navbar.about' }
      ],
      show_menu: false
    };
  },
  methods: {
    selectLanguage(lang) {
      this.languages.forEach(elem => (elem.selected = lang === elem.locale));
      this.$root.$i18n.locale = lang;
      sessionStorage.setItem('locale', lang);
    },
    toggleMenu() {
      this.show_menu = !this.show_menu;
    }
  }
};
</script>

<style scoped lang="scss">
.image-url {
  background-image: url('../../../src/assets/logo.png');
}
.h-188px {
  height: 188px;
}
</style>

<template>
  <main class="pt-10 lg:pt-20">
    <h1 class="text-3xl text-blue-600 font-semibold text-center">{{ $t('404.text') }}</h1>
    <div class="not-found-image relative">
      <span class="absolute block -mb-6 mr-6 right-0 bottom-0 text-xs text-gray-500 select-none">
        Designed by Freepik
      </span>
    </div>
    <div class="flex justify-center">
      <router-link :to="'/'" v-slot="{ route, navigate }" exact>
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-10 mb-2 rounded focus:outline-none"
          @click="navigate"
        >
          {{ $t('404.home') }}
        </button>
      </router-link>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  width: 100%;
  min-height: 600px;
  height: calc(100vh - 268px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.not-found-image {
  width: 100%;
  height: 30vw;
  min-height: 250px;

  background-image: url('../../assets/404.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>

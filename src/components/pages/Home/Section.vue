<template>
  <div :style="{ background: alternativeBackground ? '#E4E4E4' : 'none' }">
    <div class="container mx-auto px-4 lg:px-16 pt-8 pb-16">
      <h2 class="font-bold text-center text-2xl md:text-3xl lg:text-4xl mb-8">
        {{ $t('home.section.title') }}
      </h2>
      <div class="flex flex-row">
        <div class="hidden relative w-1/2 pr-4 lg:pr-16 md:flex flex-col justify-center">
          <img src="../../../assets/vector2.png" alt="" />
          <span class="absolute block -mb-6 left-0 bottom-0 text-xs text-gray-500 select-none">
            Designed by Freepik
          </span>
        </div>
        <div class="md:w-1/2">
          <div class="mb-6">
            <p class="mb-4 lg:text-lg">
              {{ $t('home.section.p1') }}
            </p>
            <p class="mb-4 lg:text-lg font-bold">
              {{ $t('home.section.p2') }}
            </p>
            <p class="mb-4 lg:text-lg">
              {{ $t('home.section.p3') }}
            </p>
          </div>

          <router-link :to="'about'" v-slot="{ href, route, navigate }" exact>
            <span>
              <a
                :href="href"
                @click="navigate"
                class="text-blue-600 hover:text-blue-800 font-medium"
              >
                {{ $t('home.section.more') }} <i class="fas fa-arrow-right text-sm"></i>
              </a>
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    alternativeBackground: Boolean
  }
};
</script>

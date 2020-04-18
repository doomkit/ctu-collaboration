<template>
  <div class="text-center">
    <h2 class="text-xl font-medium mt-0 md:mt-4 mb-4 md:mb-8 mx-8 ">
      {{ $t('test.thanks') }}
    </h2>
    <p v-if="id" class="text-lg mb-8 md:mx-8">
      {{ $t('test.link_text') }}
      <router-link :to="'/results/' + id" v-slot="{ href, route, navigate }" exact>
        <a class="underline text-blue-700 hover:text-blue-900" :href="href" @click="navigate">
          {{ $t('test.here') }}
        </a>
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    id: Number
  }
};
</script>

<style></style>

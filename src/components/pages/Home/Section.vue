<template>
  <div :style="{ background: alternativeBackground ? '#E4E4E4' : 'none' }">
    <div class="container mx-auto px-4 lg:px-16 py-8">
      <h2 class="font-bold text-center text-2xl md:text-3xl lg:text-4xl mb-8">
        What is University-Buisienss Collaboration?
      </h2>
      <div class="flex flex-row">
        <div class="hidden w-1/2 pr-4 lg:pr-16 md:flex flex-col justify-center">
          <img src="../../../assets/vector2.png" alt="" />
        </div>
        <div class="md:w-1/2">
          <div class="mb-6">
            <p class="mb-4 lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis nibh eget
              semper aliquet. Sed at malesuada neque. Morbi volutpat turpis sed convallis mollis.
              Mauris tincidunt tincidunt ornare. Maecenas non purus nisi. Sed gravida nibh eu odio
              lobortis malesuada.
            </p>
            <p class="mb-4 lg:text-lg">
              Nunc suscipit diam ut ante fermentum vulputate. Fusce lectus justo, aliquet a
              porttitor eu, lacinia sed neque. Mauris feugiat vestibulum lorem ut volutpat. Donec
              eget sem feugiat, luctus felis et, lacinia augue.
            </p>
            <p class="mb-4 lg:text-lg">
              Integer id posuere erat, at volutpat ante. Donec non lectus in nibh egestas facilisis
              porta et sapien.
            </p>
          </div>

          <router-link :to="'about'" v-slot="{ href, route, navigate }" exact>
            <span>
              <a
                :href="href"
                @click="navigate"
                class="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more <i class="fas fa-arrow-right text-sm"></i>
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

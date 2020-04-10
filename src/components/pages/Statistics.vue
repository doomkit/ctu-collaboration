<template>
  <div class="bg-gray-100">
    <div class="container m-auto px-4 py-20 lg:px-16">
      <div class="flex justify-between">
        <h1 class="text-4xl font-semibold text-left inline-block pt-8 pb-4">Statistics</h1>
      </div>
      <p class="text-left lg:text-lg mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestias, officia quis
        expedita minus perspiciatis id eos recusandae!
      </p>
      <div class="test container rounded shadow-xl p-8 bg-white mx-auto mb-8">
        <div class="flex flex-row justify-around flex-wrap">
          <div class="w-full sm:w-5/12 sm:mr-2 mb-8 sm:mb-0"><AverageRadar /></div>
          <div class="w-full sm:w-5/12 sm:ml-2"><CompareRadar /></div>
        </div>
      </div>
      <div class="test container flex flex-col lg:flex-row mx-auto">
        <div
          class="flex flex-row justify-around flex-wrap rounded shadow-xl p-8 bg-white mb-8 lg:mr-8 lg:mb-0 lg:w-2/3"
        >
          <div class="flex flex-col w-full sm:w-5/12 sm:mr-2 mb-8 sm:mb-0">
            <SuccessChart />
            <h2 class="text-center font-semibold text-lg pt-4">Average collaboration success</h2>
          </div>
          <div class="flex flex-col w-full sm:w-5/12 sm:mr-2">
            <SuccessChart />
            <h2 class="text-center font-semibold text-lg pt-4">Average collaboration success</h2>
          </div>
        </div>
        <div class="rounded shadow-xl p-8 bg-white lg:w-1/3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, inventore! Totam
            tempore quis fuga odit! Cum natus animi quas tempore iure, cumque adipisci voluptatum.
            Aspernatur delectus dolorum atque cumque eaque.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AverageRadar from './Statistics/AverageRadar';
import CompareRadar from './Statistics/CompareRadar';
import SuccessChart from './Statistics/SuccessChart';

export default {
  components: {
    AverageRadar,
    CompareRadar,
    SuccessChart
  },
  data() {
    return {};
  }
};
</script>

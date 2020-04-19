<template>
  <div>
    <div class="pt-20 -mb-1" style="background: #E4E4E4">
      <div class="container flex flex-row mx-auto px-4 lg:px-16">
        <div class="sm:w-1/2">
          <h1
            class="text-center sm:text-left text-3xl md:text-4xl lg:text-5xl font-extrabold
							leading-tight py-8 lg:-mr-8 sm:-mr-20"
          >
            {{ $t('home.welcome.title') }}
          </h1>
          <p class="text-center sm:text-left lg:text-lg pb-8 sm:pr-8">
            {{ $t('home.welcome.text') }}
          </p>
        </div>
        <div class="hidden relative w-1/2 -mb-24 lg:-mb-32 sm:flex flex-col justify-end">
          <img class="relative z-1" src="../../../assets/vector.png" alt="" />
          <span class="absolute right-0 bottom-0 text-xs text-gray-500 select-none">
            Designed by Freepik
          </span>
        </div>
      </div>
    </div>
    <svg viewBox="0 0 1440 81" class="z-0 mb-8">
      <path
        fill="#E4E4E4"
        d="M0,0.830510665 L1440,0.830510665 L1440,38.8157 C1349.27337,66.938567 1235.8947,81 1099.86397,81 C895.81787,81 507.917231,24.215024 346.15514,24.215024 C238.313745,24.215024 122.928698,34.509828 0,55.099435 L0,0.830510665 Z"
      ></path>
    </svg>

    <div class="container mx-auto px-4 md:px-16 flex flex-col justify-start mb-8">
      <div>
        <router-link :to="'test'" v-slot="{ route, navigate }" exact>
          <button
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-10 mb-2 rounded focus:outline-none"
            @click="navigate"
          >
            {{ $t('home.welcome.button') }}
          </button>
        </router-link>
        <div>
          <router-link :to="'statistics'" v-slot="{ href, route, navigate }" exact>
            <span>
              {{ $t('home.welcome.alternative_text') }}
              <a
                :href="href"
                @click="navigate"
                class="text-blue-600 hover:text-blue-800 font-medium"
              >
                {{ $t('home.welcome.alternative_link') }}<i class="fas fa-arrow-right text-sm"></i>
              </a>
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

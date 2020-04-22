<template>
  <div class="bg-gray-100">
    <div class="container m-auto px-4 pt-20 pb-10 lg:px-16">
      <h1 class="text-4xl font-semibold text-left inline-block pt-8 pb-4">
        {{ $t('about.title') }}
      </h1>
      <p class="text-lg mb-2">
        {{ $t('about.text_1') }}
        <span class="italic">'{{ $t('about.work') }}'</span>. {{ $t('about.text_2') }}
      </p>
      <h2 class="text-2xl font-medium mt-6 mb-2">{{ $t('about.author') }}</h2>
      <p class="mb-0">Nikita Shkarupa</p>
      <p class="mb-0">
        <a
          class="underline text-blue-700 hover:text-blue-900"
          href="mailto:skarunik@fel.cvut.cz?Subject=Bachelor's%20thesis"
        >
          skarunik@fel.cvut.cz
        </a>
      </p>
      <p class="mb-0">
        <a
          class="underline text-blue-700 hover:text-blue-900"
          href="mailto:n.shkarupa@yahoo.com?Subject=Bachelor's%20thesis"
        >
          n.shkarupa@yahoo.com
        </a>
      </p>
      <h2 class="text-2xl font-medium mt-6 mb-2">{{ $t('about.source') }}</h2>
      <p class="mb-0">
        <a
          class="text-blue-700 hover:text-blue-900"
          href="https://github.com/doomkit/ctu-collaboration"
          target="_blank"
          rel="nofollow noopener"
        >
          Frontend Vue.js </a
        >,
        <a
          class="text-blue-700 hover:text-blue-900"
          href="https://github.com/doomkit/ctu-server"
          target="_blank"
          rel="nofollow noopener"
        >
          Backend Node.js
        </a>
      </p>
    </div>
  </div>
</template>

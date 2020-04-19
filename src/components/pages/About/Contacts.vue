<template>
  <div class="container m-auto px-4 py-10 lg:px-16">
    <h1 class="text-4xl font-semibold text-left inline-block pb-2">
      {{ $t('about.contacts') }}
    </h1>

    <h2 class="text-2xl font-medium mt-4 mb-2">
      <a
        class="text-blue-700 hover:text-blue-900"
        href="https://www.fel.cvut.cz/cz/vz/spoluprace-s-firmami.html"
        target="_blank"
        rel="nofollow noopener"
      >
        {{ $t('about.cooperation') }}
      </a>
    </h2>
    <p class="text-base">Ing. Pavel Náplava</p>
    <p class="text-base">
      <a class="underline text-blue-700 hover:text-blue-900" href="mailto:spoluprace@fel.cvut.cz">
        spoluprace@fel.cvut.cz
      </a>
    </p>
    <p class="tex-base">tel.: +420 603 434 325</p>

    <h2 class="text-2xl font-medium mt-6 mb-2">
      <a
        class="text-blue-700 hover:text-blue-900"
        href="https://www.fel.cvut.cz/cz/vz/media/kontakty.html"
        target="_blank"
        rel="nofollow noopener"
      >
        {{ $t('about.public') }}
      </a>
    </h2>
    <p class="text-base">Ing. Jan Sláma</p>
    <p class="text-base">
      <a class="underline text-blue-700 hover:text-blue-900" href="mailto:slamajan@fel.cvut.cz">
        slamajan@fel.cvut.cz
      </a>
    </p>
    <p class="tex-base">tel.: +420 224 352 007; +420 606 051 171</p>
  </div>
</template>

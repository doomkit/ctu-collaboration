<template>
  <footer class="bg-blue-900">
    <div
      class="container mx-auto flex flex-row flex-wrap justify-center
						lg:justify-between text-white px-4 lg:px-16 pt-8 pb-10"
    >
      <div class="px-4 pt-8 text-center sm:text-left w-full sm:w-1/2 lg:w-2/5">
        <p class="font-bold text-blue-200 mb-2">{{ $t('footer.university') }}</p>
        <p class="text-xs">{{ $t('footer.cvut.university') }}</p>
        <p class="text-sm mb-2">{{ $t('footer.cvut.faculty') }}</p>
        <p class="text-sm">{{ $t('footer.cvut.address') }}</p>
      </div>

      <div class="px-4 pt-8 text-center sm:text-left w-full sm:w-1/2 lg:w-2/5">
        <p class="font-bold text-blue-200 mb-2">{{ $t('footer.contacts') }}</p>
        <p class="text-sm mb-2">Nikita Shkarupa</p>
        <a href="mailto:skarunik@fel.cvut.cz?subject=CTU Collaboration">
          <p class="text-sm hover:text-blue-300">
            <i class="fas fa-envelope"></i>&nbsp;&nbsp;skarunik@fel.cvut.cz
          </p>
        </a>
        <a href="mailto:n.shkarupa@yahoo.com?subject=CTU Collaboration">
          <p class="text-sm hover:text-blue-300">
            <i class="fas fa-envelope"></i>&nbsp;&nbsp;n.shkarupa@yahoo.com
          </p>
        </a>
      </div>
      <div class="px-4 pt-8 text-center sm:text-left w-full sm:w-1/2 lg:w-1/5">
        <p class="font-bold text-blue-200 mb-2">{{ $t('footer.links') }}</p>
        <div class="text-3xl">
          <a
            href="https://github.com/doomkit/ctu-collaboration"
            target="_blank"
            rel="nofollow noopener"
            class="hover:text-blue-300"
          >
            <i class="fab fa-github mr-2"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nikita-shkarupa/"
            target="_blank"
            rel="nofollow noopener"
            class="hover:text-blue-300"
          >
            <i class="fab fa-linkedin mx-2"></i>
          </a>
          <a
            href="https://www.fel.cvut.cz/cz/"
            target="_blank"
            rel="nofollow noopener"
            class="hover:text-blue-300"
          >
            <i class="fas fa-university ml-2"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="contaner mx-auto text-white px-4 lg:px-16 pb-10 text-center">
      <p class="text-sm text-blue-200">
        Copyright © Nikita Shkarupa {{ new Date().getFullYear() }}. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

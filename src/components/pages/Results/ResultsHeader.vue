<template>
  <div>
    <div class="container m-auto px-4 pt-20 pb-4 lg:px-16">
      <h1 class="text-4xl font-semibold text-left inline-block pb-2">
        {{ $t('results.title') }}
      </h1>
      <p>
        {{ $t('results.subtitle') }}
      </p>
      <p>
        {{ $t('results.copy_link') }}
      </p>
      <textarea
        type="text"
        class="font-medium text-sm md:text-base lg:text-lg text-center text-blue-500 py-2 bg-transparent w-full outline-none resize-none cursor-pointer"
        :value="link"
        v-on:click="copy"
        ref="textarea"
        rows="1"
        readonly
      />
      <p :class="{ 'opacity-100': copied }" class="text-center duration-500 opacity-0">
        {{ $t('results.copied') }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: String
  },
  data() {
    return {
      copied: false
    };
  },
  mounted() {
    this.windowResize();
    window.addEventListener('resize', this.windowResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.windowResize);
  },
  methods: {
    copy(event) {
      event.target.select();
      document.execCommand('copy');
      document.getSelection().removeAllRanges();
      this.copied = true;
      setTimeout(() => (this.copied = false), 2000);
    },
    windowResize() {
      this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight + 'px';
    }
  }
};
</script>

<style lang="scss" scoped>
textarea {
  overflow: hidden;
  min-height: 37px;
  max-height: 100px;
  &::selection {
    background: transparent;
  }
}
</style>

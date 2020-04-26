<template>
  <div class="flex items-center">
    <div v-if="item.comment_type === 'Danger'" class="text-red-400 text-2xl mr-8">
      <i class="fas fa-exclamation-triangle"></i>
    </div>
    <div v-else-if="item.comment_type === 'Warning'" class="text-yellow-500 text-2xl mr-8">
      <i class="fas fa-exclamation-circle"></i>
    </div>
    <div v-else class="text-blue-500 text-2xl mr-8">
      <i class="fas fa-info-circle"></i>
    </div>
    <span>{{ $i18n.locale === 'en' ? item.content_en : item.content_cz }}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
};
</script>

<style></style>

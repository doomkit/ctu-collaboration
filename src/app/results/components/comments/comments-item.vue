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
    <div>
      <p
        v-if="item.note_en || item.note_cz"
        class="text-sm font-medium text-blue-700 inline-block pb-1"
      >
        {{ $i18n.locale === 'en' ? item.note_en : item.note_cz }}
      </p>
      <p>{{ $i18n.locale === 'en' ? item.content_en : item.content_cz }}</p>
    </div>
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

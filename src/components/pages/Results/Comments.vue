<template>
  <div v-if="items" class="container m-auto px-4 pb-4 lg:px-16">
    <div class="test container rounded shadow-xl px-8 py-4 bg-white mx-auto mb-8">
      <ul>
        <li v-for="item in items" :key="item.message" class="my-4">
          <CommentsItem :item="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CommentsItem from './CommentsItem';
export default {
  components: {
    CommentsItem
  },
  props: {
    items: Array
  }
};
</script>

<style></style>

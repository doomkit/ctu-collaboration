<template>
  <div v-if="items" class="container m-auto px-4 pb-4 lg:px-16">
    <div class="test container rounded shadow-xl  py-2 bg-white mx-auto mb-8">
      <ul class="divide-y divide-gray-200">
        <li v-for="item in items" :key="item.message" class="py-4 px-8">
          <CommentsItem :item="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CommentsItem from './comments-item';
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

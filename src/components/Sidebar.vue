<template>
  <aside>
    <p
      v-for="(value, key) in info"
      :key="key"
    >{{ value }}</p>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Sidebar',
  props: [
    'info',
  ],
})
</script>

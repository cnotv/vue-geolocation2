<template>
  <aside class="sidebar">
    <button
      class="sidebar__button"
      @click="setCurrentPolygon();"
    >X</button>

    <p
      v-for="(value, key) in info"
      :key="key"
    >{{ value }}</p>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'Sidebar',
  props: [
    'info',
  ],
  methods: {
    ...mapActions([
      'setCurrentPolygon',
    ]),
  },
});
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 200px;
  height: 100vh;
  background-color: white;
  padding: 1em;
}
</style>

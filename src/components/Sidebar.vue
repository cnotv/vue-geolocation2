<template>
  <aside class="sidebar">
    <button
      class="sidebar__button"
      @click="setCurrentPolygon();"
    >X</button>

    <div
      class="sidebar__labels"
      v-for="(value, key) in info"
      :key="key"
    >
      <p class="sidebar__labels__title">{{ key }}:</p>
      <p>{{ value }}</p>
    </div>
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

<style lang="scss">
.sidebar {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  position: fixed;
  left: 0;
  top: 0;
  width: 200px;
  height: 100vh;
  background-color: white;
  padding: 1em;

  &__button {
    margin-left: calc(100% - 3em);
    background: none;
    border: 1px solid grey;
    padding: 0.5em 1em;
  }

  &__labels {
    & + & {
      border-top: 1px solid grey
    }

    &__title {
      font-weight: 700;
    }
  }
}
</style>

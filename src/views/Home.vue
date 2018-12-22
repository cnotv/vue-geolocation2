<template>
  <main>
    <Map
      :position="getCurrent.loc"
      :polygons="getPolygons"
    />
    <Sidebar
      v-if="getCurrent.info"
      :info="getCurrent.info"
    />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Map from '@/components/Map.vue';
import Sidebar from '@/components/Sidebar.vue';
import { mapGetters, mapActions } from 'vuex';

@Component({
  components: {
    Map,
    Sidebar,
  },
  computed: {
    ...mapGetters([
      'getCurrent',
      'getPolygons',
    ]),
  },
  methods: {
    ...mapActions([
      'loadPolygons',
    ]),
  },
  mounted() {
    this.$store.dispatch('loadPolygons');
  },
})
export default class Home extends Vue {}
</script>

<template>
  <main>
    <Map :position="getCurrent.loc"/>
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
import { mapGetters } from 'vuex';

@Component({
  components: {
    Map,
    Sidebar,
  },
  computed: {
    ...mapGetters([
      'getCurrent',
    ]),
  },
})
export default class Home extends Vue {}
</script>

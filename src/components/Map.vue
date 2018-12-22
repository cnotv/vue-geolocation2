<template>
  <GmapMap
    :center="position"
    :zoom="11"
    :options="mapOptions"
    class="map"
  >
    <GmapPolygon
      v-for="(item, i) of polygons"
      :key="i"
      :path="item.paths"
      @click="setCurrentPolygon(item.info);"
    />
  </GmapMap>
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(VueGoogleMaps, {
  load: {
    // NOTE: This is something you probably dont want to save here.
    key: 'AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw',
  },
});

export default {
  name: 'Map',
  props: [
    'position',
    'polygons',
  ],
  data() {
    return {
      infoWinOpen: false,
      center:
      {
        lat: 13.403528,
        lng: 52.540212,
      },
      poli:  [
        {
          lat: 13.403528,
          lng: 52.540212,
        },
        {
          lat: 13.403528,
          lng: 52.5402121,
        },
        {
          lat: 1.39,
          lng: 52.5402121,
        },
        {
          lat: 1.39,
          lng: 52.540212,
        },
      ],
      mapOptions: {
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false,
      },
    };
  },
  computed: {
    ...mapGetters([
      'getCurrent',
    ]),
  },
  methods: {
    ...mapActions([
      'setCurrentPolygon',
    ]),
  },
};
</script>

<style scoped>
.map {
  width: 100vw;
  height: 100vh
}
</style>

<template>
  <GmapMap
    :center="position"
    :zoom="14"
    :options="mapOptions"
    class="map"
    @click="loadPolygon($event)"
  >
    <GmapPolygon
      v-for="(item, i) of getPolygons"
      :key="i"
      :paths="item.paths"
      @click="loadPolygonInfo(item)"
    />
  </GmapMap>
</template>

<script>
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(VueGoogleMaps, {
  load: {
    // NOTE: This is something you probably dont want to save here.
    key: 'AIzaSyBYUdSdKShrOJ2prZV9C304bnYFieYLFm0',
  },
});

export default {
  name: 'Map',
  props: [
    'position',
  ],
  data() {
    return {
      mapOptions: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUi: false,
      },
    };
  },
  methods: {
    loadPolygonInfo(loc) {
      // this.position = {
      //   lat: loc.latLng.lat(),
      //   lng: loc.latLng.lng(),
      // };
    },
  },
};
</script>

<style scoped>
.map {
  width: 100vw;
  height: 100vh
}
</style>

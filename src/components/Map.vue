<template>
  <GmapMap
    :center="position"
    :zoom="14"
    :options="mapOptions"
    class="map"
  >
    <GmapPolygon
      v-for="(item, i) of polygons"
      :key="i"
      :paths="item.paths"
      @click="loadPolygonInfo(item.info)"
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
    'polygons',
  ],
  data() {
    return {
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

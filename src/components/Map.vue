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
      @click="setPoly(item);"
    />
  </GmapMap>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { MapPolygon } from '@/models/polygon.interface';

export default {
  name: 'Map',
  props: [
    'position',
    'polygons',
  ],
  data() {
    return {
      infoWinOpen: false,
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
    setPoly(polygon: MapPolygon) {
      // TODO: Replace if rewriting the plugin from scratch
      const poly = [];
      for (const coord of polygon.paths ) {
        // @ts-ignore:disable-next-line
        poly.push(new google.maps.LatLng(coord.lat, coord.lng));
      }
      // @ts-ignore:disable-next-line
      polygon.info.area = Math.round(google.maps.geometry.spherical.computeArea(poly) / 1000000) + 'kmq';
      // @ts-ignore:disable-next-line
      polygon.info.perimeter = Math.round(google.maps.geometry.spherical.computeLength(poly) / 1000) + 'km';
      // @ts-ignore:disable-next-line
      this.$store.dispatch('setCurrentPolygon', polygon.info);
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

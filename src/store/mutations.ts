import { ServiceGeo } from '@/models/geoApi.interface';
import { State } from './state.interface';
import { MapPolygon, MapPolygonInfo } from '@/models/polygon.interface';
import { GeoLocation } from '@/models/location.interface';

export default {
  LOAD_POLYGONS: (state: State, payload: ServiceGeo) => {
    const polygons: MapPolygon[] = [];

    for (const feature of payload.features) {
      // TODO: Verify this nesting output
      const coordinates = feature.geometry.coordinates[0][0];
      const paths: GeoLocation[] = [];
      for (const coordinate of coordinates) {
        // TODO: Set class
        paths.push(
          {
            lat: coordinate[1],
            lng: coordinate[0],
          },
        );
      }

      // TODO: Set class
      polygons.push(
        {
          info: {
            name: feature.properties.name,
            population: feature.properties.population,
            averageAge: feature.properties.averageAge,
            area: 0,
            perimeter: 0,
          },
          paths,
        },
      );
    }

    return state.polygons = polygons;
  },

  SET_CURRENT_POLYGON: (state: State, info: MapPolygonInfo) => {
    return state.current.info = info;
  },
};

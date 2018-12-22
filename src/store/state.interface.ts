import { GeoLocation } from '@/models/location.interface';
import { MapPolygon, MapPolygonInfo } from '@/models/polygon.interface';

export interface State {
  current: {
    loc: GeoLocation,
    info: MapPolygonInfo | undefined,
  };
  polygons: MapPolygon[];
}

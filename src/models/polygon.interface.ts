import { GeoLocation } from './location.interface';

export interface MapPolygonInfo {
  name: string;
  population: number;
  averageAge: number;
  area: number;
  perimeter: number;
}

export interface MapPolygon {
  info: MapPolygonInfo;
  paths: GeoLocation[];
}

import { GeoLocation } from './location.interface';

export interface MapPolygonInfo {
  name: string;
  population: number;
  averageAge: number;
  area: string;
  perimeter: string;
}

export interface MapPolygon {
  info: MapPolygonInfo;
  paths: GeoLocation[];
}

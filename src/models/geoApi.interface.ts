import { GeoLocation } from './location.interface';

export interface ServiceGeo {
  type: string;
  features: ServiceGeoFeature[];
}

export interface ServiceGeoFeature {
  type: string;
  properties: ServiceGeoProperties;
  geometry: ServiceGeoGeometry;
}

export interface ServiceGeoGeometry {
  type: string;
  // FIXME: This declaration is definitely an hack from the backend :)
  coordinates: number[][][][];
}

export interface ServiceGeoProperties {
  name: string;
  population: number;
  averageAge: number;
}

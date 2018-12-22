import { GeoLocation } from '@/models/location.interface';

export interface State {
  current: {
    loc: GeoLocation,
  };
}

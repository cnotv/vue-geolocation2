import { State } from '@/store/state.interface';

export const getCurrent = (state: State) => state.current;
export const getPolygons = (state: State) => state.polygons;

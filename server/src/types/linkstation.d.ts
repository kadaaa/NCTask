import { TPoint } from './point';

export interface LinkStationI extends TPoint {
    r: number; // reach
    d: number; // distance
    p: number; // power
    setDistance: (p: TPoint) => void;
    setPower: () => void;
}
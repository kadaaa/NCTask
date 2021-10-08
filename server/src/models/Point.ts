import { TPoint } from "../types/point";

export class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getPoint(): TPoint {
        return {
            x: this.x,
            y: this.y,
        }
    }
}
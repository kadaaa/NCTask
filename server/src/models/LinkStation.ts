import { TPoint } from "../types/point";

export class LinkStation {
    x: number;
    y: number;
    r: number;
    d: number;
    p: number;

    constructor(x: number, y: number, r: number) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.d = 0;
        this.p = 0;
    }

    setDistance(point: TPoint): void {
        this.d = Math.sqrt(
            Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2)
        );
        this.setPower();
    }

    setPower(): void {
        this.p = this.r < this.d 
            ? 0
            : Math.pow((this.r - this.d), 2);
    }
}
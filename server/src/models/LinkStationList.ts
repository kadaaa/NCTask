import { LinkStationI } from "../types/linkstation";
import { TPoint } from "../types/point";
import { LinkStation } from "./LinkStation";

export class LinkStationList {
    linkStationList: LinkStationI [];

    constructor() {
        this.reset();
    }

    reset() {
        const linkStation1 = new LinkStation(0, 0, 10);
        const linkStation2 = new LinkStation(20, 20, 5);
        const linkStation3 = new LinkStation(10, 0, 12);

        this.linkStationList = [linkStation1, linkStation2, linkStation3];
    }

    setLinkStationList(point?: TPoint): void {
        if(!point) return;
        for(let i = 0; i < this.linkStationList.length; i++) {
            this.linkStationList[i].setDistance(point);
        }
    }
}
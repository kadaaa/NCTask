import { LinkStationList } from "../models/LinkStationList";
import { Point } from "../models/Point";
import { isNumber } from "../utils/utility";

export const getAllLinkStations = (req: any, res: any) => {
    const { x, y } = req.query;

    const allLinkStations = new LinkStationList();

    if(isNumber(x) && isNumber(y)) {
        const inputPoint = new Point(x, y);
        allLinkStations.setLinkStationList(inputPoint);
    } else {
        allLinkStations.setLinkStationList();
    }

    res.json(allLinkStations.linkStationList);
};
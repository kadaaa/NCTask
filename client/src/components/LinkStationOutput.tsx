import { useEffect, useState } from "react";
import { Message } from 'semantic-ui-react';

import { TLinkStation } from "../types/app";

type LinkStationOutputProps = {
    stations: TLinkStation[];
    submittedPoint: { x: string, y: string };
}

const LinkStationOutput = (props: LinkStationOutputProps) => {
    const { stations, submittedPoint, } = props;
    const [ bestLinkStation, setBestLinkStation ] = useState(stations[0]);

    useEffect(() => {
        sortByMaxPower();
        return sortByMaxPower();
    });

    const sortByMaxPower = (): void => {
        const stationsByMaxPower = stations.sort((a: TLinkStation, b: TLinkStation) => b.p - a.p);
        setBestLinkStation(stationsByMaxPower[0]);
    };

    const renderOutput = (): string => {
        if(!submittedPoint.x || !submittedPoint.y) {
            return 'Not enough data';
        }
        return !bestLinkStation || !bestLinkStation.p
        ? `No link station within reach for point (${submittedPoint.x}, ${submittedPoint.y})`
        : `Best link station for point (${submittedPoint.x}, ${submittedPoint.y}) is (${bestLinkStation.x}, ${bestLinkStation.y}) with power ${bestLinkStation.p}`;
    } 

    return <Message header='Find the best link station' content={renderOutput()} />
}

export default LinkStationOutput;
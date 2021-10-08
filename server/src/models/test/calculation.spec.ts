import { LinkStation } from '../LinkStation';
import { LinkStationList } from '../LinkStationList';
import { Point } from '../Point';

describe('Models', () => {
    describe('Link Station Model', () => {
        it('Link station 1 should return correct distance and power for point (0, 0)', () => {
            const myLinkStation = new LinkStation(0, 0, 10);

            const myPoint = new Point(0, 0);
            myLinkStation.setDistance(myPoint);
            myLinkStation.setDistance(myPoint);
            expect(myLinkStation.d).toBe(0);
            expect(myLinkStation.p).toBe(100);
       });

       it('Link station 2 should return correct distance and power for point (0, 0)', () => {
            const myLinkStation = new LinkStation(20, 20, 5);

            const myPoint = new Point(0, 0);
            myLinkStation.setDistance(myPoint);
            myLinkStation.setDistance(myPoint);
            expect(myLinkStation.d).toBe(28.284271247461902);
            expect(myLinkStation.p).toBe(0);
        });

        it('Link station 3 should return correct distance and power for point (0, 0)', () => {
            const myLinkStation = new LinkStation(10, 0, 12);

            const myPoint = new Point(0, 0);
            myLinkStation.setDistance(myPoint);
            myLinkStation.setDistance(myPoint);
            expect(myLinkStation.d).toBe(10);
            expect(myLinkStation.p).toBe(4);
        });
    });

    describe('Link Station List Model', () => {
        it('A collectionn of 3 link stations should return correct distance and power', () => {
            const myLinkStationList = new LinkStationList();
            const myPoint = new Point(100, 100);
            myLinkStationList.setLinkStationList(myPoint);
            expect(myLinkStationList.linkStationList.length).toBe(3);
            expect(myLinkStationList.linkStationList[0].d).toBe(141.4213562373095);
            expect(myLinkStationList.linkStationList[0].p).toBe(100);
            expect(myLinkStationList.linkStationList[1].d).toBe(113.13708498984761);
            expect(myLinkStationList.linkStationList[1].p).toBe(0);
            expect(myLinkStationList.linkStationList[2].d).toBe(134.5362404707371);
            expect(myLinkStationList.linkStationList[2].p).toBe(4);
        });
    });
});
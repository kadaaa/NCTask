import { LinkStation } from '../LinkStation';
import { Point } from '../Point';

describe('Models', () => {
    describe('Link Station Model', () => {
        it('Link station 1 should return correct distance and power', () => {
            const myLinkStation = new LinkStation(0, 0, 10);

            const myPoint = new Point(0, 0);
            myLinkStation.setDistance(myPoint);
            myLinkStation.setDistance(myPoint);
            expect(myLinkStation.d).toBe(0);
            expect(myLinkStation.p).toBe(100);
       });

       it('Link station 2 should return correct distance and power', () => {
            const myLinkStation = new LinkStation(20, 20, 5);

            const myPoint = new Point(0, 0);
            myLinkStation.setDistance(myPoint);
            myLinkStation.setDistance(myPoint);
            expect(myLinkStation.d).toBe(28.284271247461902);
            expect(myLinkStation.p).toBe(0);
        });

        it('Link station 3 should return correct distance and power', () => {
            const myLinkStation = new LinkStation(10, 0, 12);

            const myPoint = new Point(0, 0);
            myLinkStation.setDistance(myPoint);
            myLinkStation.setDistance(myPoint);
            expect(myLinkStation.d).toBe(10);
            expect(myLinkStation.p).toBe(4);
        });
    });

    describe('Link Station List Model', () => {
        it('sth', () => {
            expect(1).toBe(1);
        });
    });
});
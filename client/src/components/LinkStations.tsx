import { useEffect, useState } from "react";
import { apiGet } from "../services/api";
import LinkStationForm from "./LinkStationForm";
import LinkStationOutput from "./LinkStationOutput";
import LinkStationTable from "./LinkStationTable";

const LinkStations = () => {
    const [ allStations, setAllStations ] = useState([]);
    const [ submittedPoint, setSubmittedPoint ] = useState({ x: '', y: ''});

    useEffect(() => {
        fetchAllStations();
    }, []);

    const fetchAllStations = async () => {
        try {
            const response = await apiGet('/stations');
            setAllStations(response);
        } catch (e) {
            console.log(e);
        }
    }

    const onSubmitData = async (x: string, y: string) => {
        try {
            const response = await apiGet('/stations', { x, y });
            setAllStations(response);
            setSubmittedPoint({ x, y });
        } catch (e) {
            console.log(e);
        }
    }

    return <>
        <LinkStationForm onSubmit={onSubmitData}/>
        <LinkStationOutput submittedPoint={submittedPoint} stations={allStations} />
        <LinkStationTable stations={allStations} />
    </>
}

export default LinkStations;
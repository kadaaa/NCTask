import { Label, Table } from 'semantic-ui-react';

import { TLinkStation } from "../types/app";

type LinkStationRowProps = {
    station: TLinkStation;
    index: number;
}

type LinkStationTableProps = {
    stations: TLinkStation [];
}

const LinkStationRow = (props: LinkStationRowProps) => {
    const { station, index } = props;
    // return <tr>
    //     <td>No. {index + 1}</td>
    //     <td>{station.x}</td>
    //     <td>{station.y}</td>
    //     <td>{station.r}</td>
    //     <td>{station.d}</td>
    //     <td>{station.p}</td>
    // </tr>;
    return <Table.Row>
         <Table.Cell>
          <Label ribbon>No. {index + 1}</Label>
        </Table.Cell>
        <Table.Cell>{station.x}</Table.Cell>
        <Table.Cell>{station.y}</Table.Cell>
        <Table.Cell>{station.r}</Table.Cell>
        <Table.Cell>{station.d}</Table.Cell>
        <Table.Cell>{station.p}</Table.Cell>
    </Table.Row>
}

const LinkStationTable = (props: LinkStationTableProps) => {
    const { stations } = props;
    // return <table>
    //     <thead>
    //         <tr>
    //             <th>Link Station</th>
    //             <th>x-coordinate</th>
    //             <th>y-coordinate</th>
    //             <th>Reach</th>
    //             <th>Distance</th>
    //             <th>Power</th>
    //         </tr>
    //     </thead>
    //     <tbody>
    //         {stations.map((station: any, index: number) => <LinkStationRow key={index} index={index} station={station} />)}
    //     </tbody>
    // </table>;
    return <Table celled>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Link Station</Table.HeaderCell>
                <Table.HeaderCell>x-coordinate</Table.HeaderCell>
                <Table.HeaderCell>y-coordinate</Table.HeaderCell>
                <Table.HeaderCell>Reach</Table.HeaderCell>
                <Table.HeaderCell>Distance</Table.HeaderCell>
                <Table.HeaderCell>Power</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {stations.map((station: any, index: number) => <LinkStationRow key={index} index={index} station={station} />)}
        </Table.Body>
    </Table>
}

export default LinkStationTable;
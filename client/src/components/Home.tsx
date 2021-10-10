import { Header } from 'semantic-ui-react';

const Home = () => {
    return <>
        <Header as='h3' style={{ fontSize: '2em' }}>Link Station Problem</Header>
        <div style={{ fontSize: '1.33em' }}>
            <p>The application is built to find the link station with the most power. The distance between the given point and the link station list is calculated in two dimensional space. The form accepts both positive and negative integers or decimals.</p>
            <p>3 link stations are located at point (0, 0), (20, 20) and (10, 0), in turn, with the reach value of 10, 5 and 12.</p>
            <p>The following techs are used for the application:</p>
            <ul>
                <li>Front-end: React, Typescript</li>
                <li>Server-side: NodeJS, Express, Jest, Typescript</li>
                <li>Deployment: AWS</li>
            </ul>
        </div>
    </>
}

export default Home;
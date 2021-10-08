import { Header } from 'semantic-ui-react';

const Home = () => {
    return <>
        <Header as='h3' style={{ fontSize: '2em' }}>Link Station Problem</Header>
        <p style={{ fontSize: '1.33em' }}>
            The application is built to find the link station with the most power. The distance between the given point and the link station list is calculated in two dimensional space. The form accepts both positive and negative integers or decimals.
            <ul>
                <li>Front-end techs: React, Typescript</li>
                <li>Server-side techs: NodeJS, Express, Jest, Typescript</li>
                <li>Deployment: AWS</li>
            </ul>
        </p>
    </>
}

export default Home;
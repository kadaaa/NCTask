import express from 'express';
import cors from 'cors';

// import Routes root
import stationRoutes from './routes/linkStations';

const app = express();
const port = process.env.PORT || 80;
app.set('port', port);
const whitelist = ['http://localhost:3000']; // to-do add deployed client url
app.use(cors({
    origin: (origin, callback) => {
        if(whitelist.indexOf(origin) !== -1 || typeof origin === "undefined") {
            callback(null, true);
        } else {
            callback(new Error('Request is blocked due to unlisted resource in our whitelist (CORS)'));
        }
    }
}));

app.use('/stations', stationRoutes);

export default app;
import express from 'express';

import { getAllLinkStations } from '../handlers/linkStations';
const router = express.Router();

router.get('/', getAllLinkStations);

export default router;
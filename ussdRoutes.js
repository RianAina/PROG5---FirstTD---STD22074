import express from 'express';
import { handleUssdRequest } from '../controllers/ussdController.js';

const router = express.Router();

router.post('/', handleUssdRequest);

export default router;

import express from 'express';
import ussdRoutes from './src/routes/ussdRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/ussd', ussdRoutes);

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

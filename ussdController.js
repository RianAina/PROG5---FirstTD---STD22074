import { processUssdInput } from '../services/ussdService.js';

export const handleUssdRequest = (req, res) => {
  try {
    const { sessionId, phoneNumber, text } = req.body;

    if (!sessionId || !phoneNumber || text === undefined) {
      return res.status(400).send('Requête invalide : données manquantes.');
    }

    const response = processUssdInput(text);
    res.send(response);
  } catch (error) {
    console.error('Erreur USSD:', error);
    res.status(500).send('Erreur serveur.');
  }
};

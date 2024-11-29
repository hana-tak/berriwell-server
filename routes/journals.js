import express from 'express';
import { getJournals, addJournal, updateJournal, deleteJournal } from '../controllers/journalsController.js';

const router = express.Router();

router.get('/', getJournals);
router.post('/', addJournal);
router.put('/', updateJournal);
router.delete('/', deleteJournal);

export default router;
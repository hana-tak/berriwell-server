import express from 'express';
import { getJournals, addJournal, updateJournal, deleteJournal } from '../controllers/journalsController.js';

const router = express.Router();

router.get('/:id', getJournals);
router.post('/', addJournal);
router.put('/:journal_id', updateJournal);
router.delete('/:journal_id', deleteJournal);

export default router;
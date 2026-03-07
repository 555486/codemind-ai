import { Router } from 'express';
import { teachConcept } from '../controllers/teachController';

const router = Router();

// POST /api/teach - 教学概念
router.post('/', teachConcept);

export default router;

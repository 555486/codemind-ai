import { Router } from 'express';
import { explainCode } from '../controllers/explainController';

const router = Router();

// POST /api/explain - 解释代码
router.post('/', explainCode);

export default router;

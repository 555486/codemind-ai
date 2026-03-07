import { Router } from 'express';
import { analyzeCode } from '../controllers/analyzeController';

const router = Router();

// POST /api/analyze - 分析代码
router.post('/', analyzeCode);

export default router;

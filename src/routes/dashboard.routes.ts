import { Router } from 'express';
import { DashboardController } from '../controllers/dashboard.controller';

const router = Router();

router.get('/stats', DashboardController.getStats);

export const dashboardRoutes = router;

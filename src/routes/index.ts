import { Router } from 'express';
import { userRoutes } from './user.routes';
import { profileRoutes } from './profile.routes';
import { complaintRoutes } from './complaint.routes';
import { dashboardRoutes } from './dashboard.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/profiles', profileRoutes);
router.use('/complaints', complaintRoutes);
router.use('/dashboard', dashboardRoutes);

export default router;

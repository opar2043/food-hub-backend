import { Router } from 'express';
import { ProfileController } from '../controllers/profile.controller';

const router = Router();

router.post('/', ProfileController.createProfile);
router.get('/', ProfileController.getAllProfiles);
router.get('/:id', ProfileController.getProfileById);
router.delete('/:id', ProfileController.deleteProfile);
router.patch('/:id', ProfileController.updateProfile);

export const profileRoutes = router;

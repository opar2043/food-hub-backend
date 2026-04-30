import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();

router.post('/', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.delete('/:id', UserController.deleteUser);
router.patch('/:id', UserController.updateUser);

export const userRoutes = router;

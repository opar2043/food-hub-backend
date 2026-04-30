import { Router } from 'express';
import { ComplaintController } from '../controllers/complaint.controller';

const router = Router();

router.post('/', ComplaintController.createComplaint);
router.get('/', ComplaintController.getAllComplaints);
router.delete('/:id', ComplaintController.deleteComplaint);
router.patch('/:id', ComplaintController.updateComplaint);

export const complaintRoutes = router;

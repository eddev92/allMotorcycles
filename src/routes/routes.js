// import InspectionController from '../controllers/inspection';
import {Router} from 'express';

const router = new Router();
router.get('/roads', InspectionController.sendMessageApproved);
// router.post('/returned', InspectionController.sendMessageReturned);

export default router;

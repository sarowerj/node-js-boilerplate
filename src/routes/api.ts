import { Router } from 'express';
import RegistrationController from '../controllers/RegistrationController';

import validateRegisterInfo from '../middlewares/validators/UserValidator';

/**
 * Define all routes for website
 */
const router = Router(); 
router.post('/register', validateRegisterInfo,  RegistrationController.index);
router.post('/validate-token',RegistrationController.validateToken);
export default router;
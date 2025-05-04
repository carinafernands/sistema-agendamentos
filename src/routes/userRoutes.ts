import { Router } from "express";
import { addUser, listUsers, updateUserDetails, removeUser} from '../controllers/userController';
import { authenticateAdmin } from "../middlewares/authMiddleware";

const router = Router();

router.post('/users', authenticateAdmin, addUser);
router.get('/users', authenticateAdmin, listUsers);
router.put('/users/:id', authenticateAdmin, updateUserDetails);
router.delete('/users/:id', authenticateAdmin, removeUser);

export default router;
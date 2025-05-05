import { Router } from "express";
import { addUser, listUsers, updateUserDetails, removeUser} from '../controllers/userController';
import { authenticateAdmin } from "../middlewares/authMiddleware";

const router = Router();

router.post('/', authenticateAdmin, addUser);
router.get('/', authenticateAdmin, listUsers);
router.put('/:id', authenticateAdmin, updateUserDetails);
router.delete('/:id', authenticateAdmin, removeUser);

export default router;
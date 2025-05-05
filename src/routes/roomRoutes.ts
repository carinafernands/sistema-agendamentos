import { Router } from "express";
import { addRoom, getRooms } from "../controllers/roomController";
import { authenticateAdmin} from "../middlewares/authMiddleware";
import { authorizeRoles} from "../middlewares/roleMiddleware"
const router = Router();

router.post("/",
     authenticateAdmin,
     authorizeRoles("admin"), 
     addRoom);
router.get("/",
     authenticateAdmin, 
     authorizeRoles("admin", "funcionario"),
      getRooms);

export default router;
import { Router } from "express";
import { addMassage, getMassages} from "../controllers/massageController";
import { authenticateAdmin} from "../middlewares/authMiddleware";
import { authorizeRoles } from "../middlewares/roleMiddleware";
const router = Router();

router.post("/", 
    authenticateAdmin, 
    authorizeRoles("admin"),
    addMassage);
router.get("/", 
    authenticateAdmin, 
    authorizeRoles("admin", "funcionario"),
    getMassages);

export default router;
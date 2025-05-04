import { Router } from "express";
import { addMassage, getMassages} from "../controllers/massageController";
import { authenticateAdmin} from "../middlewares/authMiddleware";
import { authorizeRoles } from "../middlewares/roleMiddleware";
const router = Router();

router.post("/massage", 
    authenticateAdmin, 
    authorizeRoles("admin"),
    addMassage);
router.get("/massage", 
    authenticateAdmin, 
    authorizeRoles("admin", "funcionario"),
    getMassages);

export default router;
import { Router } from "express";
import { addMassage, getMassages} from "../controllers/massageController";
import { authenticateAdmin} from "../middlewares/authMiddleware";
import { get } from "http";

const router = Router();

router.post("/massage", authenticateAdmin, addMassage);
router.get("/massage", getMassages);

export default router;
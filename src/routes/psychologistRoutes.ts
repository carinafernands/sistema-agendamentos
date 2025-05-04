import { Router } from 'express';
import {addPsychologist, getPsychologist} from "../controllers/psychologistController";
import { authenticateAdmin} from "../middlewares/authMiddleware";
import { authorizeRoles } from "../middlewares/roleMiddleware";

const router = Router();

router.post("/psychologist",
     authenticateAdmin,
     authorizeRoles("admin"),
     addPsychologist);
     
router.get("/psychologist", getPsychologist);

export default router;
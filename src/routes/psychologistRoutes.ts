import { Router } from 'express';
import {addPsychologist, getPsychologist} from "../controllers/psychologistController";
import { authenticateAdmin} from "../middlewares/authMiddleware";

const router = Router();

router.post("/psychologist", authenticateAdmin, addPsychologist);
router.get("/psychologist", getPsychologist);

export default router;
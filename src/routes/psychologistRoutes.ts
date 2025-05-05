import { Router } from 'express';
import {addPsychologist, getPsychologist} from "../controllers/psychologistController";
import { authenticateAdmin} from "../middlewares/authMiddleware";
import { authorizeRoles } from "../middlewares/roleMiddleware";

const router = Router();

router.post("/",
     authenticateAdmin,
     authorizeRoles("admin"),
     addPsychologist);
     
router.get("/", 
     authenticateAdmin, 
     authorizeRoles("admin", "funcionario"), 
     getPsychologist);

export default router;
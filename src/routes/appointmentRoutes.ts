import { Router } from "express";
import { addAppointment } from "../controllers/appointmentController";
import { authenticateAdmin } from "../middlewares/authMiddleware";
import { authorizeRoles } from "../middlewares/roleMiddleware";

const router = Router();

router.post(
    "/appointment",
    authenticateAdmin, 
    authorizeRoles("funcionario"),
    addAppointment
);

export default router;
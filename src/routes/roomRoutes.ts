import { Router } from "express";
import { addRoom, getRooms } from "../controllers/roomController";
import { authenticateAdmin} from "../middlewares/authMiddleware";
import { get } from "http";

const router = Router();

router.post("/rooms", authenticateAdmin, addRoom);
router.get("/rooms", getRooms);

export default router;
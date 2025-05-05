import dotenv from 'dotenv';
import express from 'express';
import { PrismaClient } from '@prisma/client';
import loginRoutes from "./routes/loginRoutes";
import userRoutes from "./routes/userRoutes";
import psychologistRoutes from "./routes/psychologistRoutes";
import massageRoutes from "./routes/massageRoutes";
import roomRoutes from "./routes/roomRoutes";
import appointmentRoutes from  "./routes/appointmentRoutes";
import { authenticateAdmin } from "./middlewares/authMiddleware";

dotenv.config();

const app = express();
const prisma = new PrismaClient();


app.use(express.json());

app.use("/login", loginRoutes);
app.use("/users", userRoutes);
app.use("/psychologist", authenticateAdmin, psychologistRoutes);
app.use("/massage-therapist", authenticateAdmin, massageRoutes);
app.use("/rooms", authenticateAdmin, roomRoutes);
app.use("/appointments", appointmentRoutes);

app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000!")
})
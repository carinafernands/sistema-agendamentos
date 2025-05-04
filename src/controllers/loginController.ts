import { Request, Response } from "express";
import { loginService} from "../services/loginService";

export const loginController = async (req: Request, res: Response) => {
    const {email, password} = req.body;

    try{
        const token = await loginService(email, password);
        res.status(200).json({ token });
    }catch(error){
        res.status(401).json({message: "Erro."})
    }
};
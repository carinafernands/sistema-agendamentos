import { Request } from 'express';
import { JwtPayload } from "jsonwebtoken";
import { Role } from "@prisma/client";

declare namespace Express {
  export interface Request {
    user?: string | JwtPayload;
  }
}

declare global {
  namespace Express{
    interface Request{
      user?: {
        id: number;
        email: string;
        role: Role;
      }
    }
  }
}
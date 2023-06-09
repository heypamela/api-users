import dotenv from "dotenv";
import JWT from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

dotenv.config();

export const Auth = {
  private: async (req: Request, res: Response, next: NextFunction) => {
    let success = false;

    if (req.headers.authorization) {
      const [authType, token] = req.headers.authorization.split(" ");
      if (authType === "Bearer") {
        try {
          JWT.verify(token, process.env.JWT_SECRET_KEY as string);

          success = true;
        } catch (err) {
          return err;
        }
      }
    }

    if (success) {
      next();
    } else {
      res.json({ error: "Não autorizado" });
    }
  },
};

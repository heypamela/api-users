import dotenv from "dotenv";
import { Request, Response } from "express";

import { UserApplication } from "../application/UserApplication";

dotenv.config();

let userApplication = new UserApplication();

export class UserController {
  public static async create(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const createUserData = { name, email, password };

    if (createUserData) {
      const newUser = await userApplication.create(createUserData);

      if (newUser) res.status(201).send("User created").json({ name, email });
    } else if (createUserData) {
      res.status(404).send("The user already exists");
    } else {
      res.json({ error: "Informações não enviadas." });
    }
  }

  public static async findOne(req: Request, res: Response) {
    const { idUser } = req.params;

    const user = await userApplication.findOne(idUser);
    res.status(200).json(user);
  }

  public static async findAll() {
    const list = await userApplication.findAll();

    return list;
  }

  public static async update(req: Request, res: Response) {
    const { idUser } = req.params;

    if (idUser) {
      const bodyUser = req.body;

      const update = userApplication.update(idUser, bodyUser);
      res.status(200).json(update);
    }
  }

  public static async delete(req: Request, res: Response) {
    const { idUser } = req.params;

    const deleteId = await userApplication.delete(idUser);

    res.send("User deleted").json(deleteId);
  }
}

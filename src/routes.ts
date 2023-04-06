import { Router, Request, Response } from "express";

import { UserController } from "./controller/UserController";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  return res.json({ mss: "Hello World!" });
});

router.post("/user", UserController.create);

router.get("/user", UserController.findAll);
router.get("/user/:idUser", UserController.findOne);

router.put("/update/:idUser", UserController.update);

router.delete("/delete/:idUser", UserController.delete);

export { router };

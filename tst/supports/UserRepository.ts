import "reflect-metadata";
import { UpdateResult } from "typeorm";

import { UserModel } from "../../src/database/models/UserModel";
import { Database } from "../../src/database/connection";

const db = new Database();

const findById = async (): Promise<UserModel> => {
  return db.getRepository(UserModel).createQueryBuilder("users").getOne();
};

const listUsers = (): Promise<UserModel[]> => {
  return db.getRepository(UserModel).find();
};

const updateUser = (data: Partial<UserModel>): Promise<UpdateResult> => {
  return db
    .getRepository(UserModel)
    .createQueryBuilder()
    .update({ ...data })
    .where("idUser = :idUser")
    .execute();
};

const deleteUser = async (idUser: UserModel) => {
  return await db
    .getRepository(UserModel)
    .createQueryBuilder("user")
    .delete()
    .where("idUser = :idUser", { idUser: idUser })
    .execute();
};

export = {
  findById,
  listUsers,
  updateUser,
  deleteUser,
};

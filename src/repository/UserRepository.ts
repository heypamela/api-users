import { Repository } from "typeorm";

import { AppDataSource } from "../database/data-source";
import { UserModel } from "../database/models/UserModel";
import { IUser } from "../database/interfaces/User.interface";
import { UpdateUser } from "../interfaces/UpdateUser.interface";

export class UserRepository {
  public async save(data: IUser): Promise<UserModel> {
    return this.repository.save({ ...data });
  }

  public findOne(email: string): Promise<UserModel> {
    return this.repository
      .createQueryBuilder("user")
      .where("email = :email", { email })
      .getOne();
  }

  public findById(idUser: string): Promise<UserModel> {
    return this.repository.findOne({ where: { idUser } });
  }

  public async findAll() {
    return await this.repository.find();
  }

  public update(idUser: string, { name, email, password }: UpdateUser) {
    return this.repository
      .createQueryBuilder()
      .update(UserModel)
      .set({
        name,
        email,
        password,
      })
      .where("idUser = :idUser", { idUser: idUser })
      .execute();
  }

  public delete(idUser: string) {
    return this.repository
      .createQueryBuilder("user")
      .delete()
      .where("idUser = :idUser", { idUser: idUser })
      .execute();
  }

  private get repository(): Repository<UserModel> {
    return AppDataSource.getRepository(UserModel);
  }
}

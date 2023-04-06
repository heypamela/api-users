import dotenv from "dotenv";

import { IUser } from "../database/interfaces/User.interface";
import { UpdateUser } from "../interfaces/UpdateUser.interface";
import { UserRepository } from "../repository/UserRepository";

dotenv.config();
let userRepository = new UserRepository();

export class UserApplication {
  public async create(userData: IUser): Promise<string> {
    const user = await userRepository.findOne(userData.email);
    if (user)
      throw console.error({
        message: "The user already exists",
      });

    const newUser = await userRepository.save({ ...userData });

    return newUser.idUser;
  }

  public findOne(idUser: string) {
    return userRepository.findById(idUser);
  }

  public findAll() {
    return userRepository.findAll();
  }

  public update(idUser: string, userData: UpdateUser) {
    return userRepository.update(idUser, userData);
  }

  public delete(idUser: string) {
    return userRepository.delete(idUser);
  }
}

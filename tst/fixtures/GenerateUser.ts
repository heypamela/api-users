import { Chance } from "chance";

import { UserModel } from "../../src/database/models/UserModel";

const chance = new Chance();

export const generateUser = (fields?: Partial<UserModel>) => ({
  uuid: chance.guid(),
  name: chance.name(),
  email: chance.email(),
  password: chance.string(),
  ...fields,
});

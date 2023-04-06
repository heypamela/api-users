import { Chance } from "chance";

import { generateUser } from "../fixtures/GenerateUser";
import UserRepository from "../supports/UserRepository";
import request from "../utils/mock/request";

const chance = new Chance();

describe("Given call POST /user", () => {
  beforeEach(async () => {
    await UserRepository.findById();
  });

  const userBody = generateUser({
    name: chance.name(),
    email: chance.email(),
    password: chance.string(),
  });

  test("When is possible create user", async () => {
    const response = await request().post("/user").send(userBody);

    expect(response.body).toBe("User created");
  });
});

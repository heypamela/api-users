import request from "supertest";

import { router } from "../../../src/routes";

export default () => request(router);

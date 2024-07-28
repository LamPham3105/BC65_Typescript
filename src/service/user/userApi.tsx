import { httpClient } from "../../util/util";
import {
  USER_LOGIN,
  TOKEN_AUTHOR,
  setDataJsonStorage,
  setDataTextStorage,
  setCookie,
} from "../../util/utilMethod";

export class UserApi {
  async postRegisterUser(userData: object) {
    try {
      const res = await httpClient.post("/api/auth/signup", userData);
      return res;
    } catch (error) {}
  }

  async postLoginUser(userData: object) {
    try {
      const res = await httpClient.post("/api/auth/signin", userData);
      return res.data;
    } catch (error) {}
  }
}

export const userApi = new UserApi();

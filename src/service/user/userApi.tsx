import { httpClient } from "../../util/util";
import {
  USER_LOGIN,
  setDataJsonStorage,
  setDataTextStorage,
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
      if (res) {
        setDataTextStorage(USER_LOGIN, res.data.content);
        setDataJsonStorage(USER_LOGIN, res.data.content);
      }
      return res.data;
    } catch (error) {}
  }

  async getUser() {
    try {
      const res = await httpClient.get("/api/users");
      return res.data.content;
    } catch (error) {}
  }

  async postUser(userData: object) {
    try {
      const res = await httpClient.post("/api/users", userData);
      return res.data;
    } catch (error) {}
  }

  async postUserAvatar(userData: object) {
    try {
      const res = await httpClient.post("/api/users/upload-avatar", userData);
      return res.data;
    } catch (error) {}
  }

  async getUserById(userId: string) {
    try {
      const res = await httpClient.get(`/api/users/${userId}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(userData: object, userId: string) {
    try {
      const res = await httpClient.put(`/api/users/${userId}`, userData);
      return res.data;
    } catch (error) {}
  }
}

export const userApi = new UserApi();

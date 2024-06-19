import apiEndpoint from "../utils/endpoints";
import BaseService from "./base-service";

class UserService extends BaseService {
  getProfile = (id: number) =>
    this.get<DynamicObject>(apiEndpoint.user.getProfile(id));
}

export default new UserService();

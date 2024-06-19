import apiEndpoint from "../utils/endpoints";
import BaseService from "./base-service";

class NovelService extends BaseService {
  getNovel = (id: number) =>
    this.get<DynamicObject>(apiEndpoint.novel.getDetailNovel(id));
}

export default new NovelService();

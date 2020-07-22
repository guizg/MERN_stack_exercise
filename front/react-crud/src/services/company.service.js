import http from "../http-common";

class CompanyDataService {
  getAll() {
    return http.get("/companies");
  }

  create(data) {
    return http.post("/companies", data);
  }

}

export default new CompanyDataService();

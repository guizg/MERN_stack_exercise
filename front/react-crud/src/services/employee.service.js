import http from "../http-common";

class EmployeeDataService {

  create(data) {
    return http.post("/employees", data);
  }

  getEmployeesFromCompany(company_id) {
    return http.get(`/employees/${company_id}`, company_id);
  }

}

export default new EmployeeDataService();

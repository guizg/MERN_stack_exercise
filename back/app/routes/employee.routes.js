module.exports = app => {
    const employees = require("../controllers/employee.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Employee
    router.post("/", employees.create);

    // Get all employees from Company
    router.get("/:id", employees.getEmployees);
  
    
    app.use('/employees', router);
  };
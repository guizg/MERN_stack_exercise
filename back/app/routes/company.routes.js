module.exports = app => {
    const companies = require("../controllers/company.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Company
    router.post("/", companies.create);

    // Get all companies
    router.get("/", companies.findAll);
  
    
    app.use('/companies', router);
  };
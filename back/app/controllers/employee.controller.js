const db = require("../models");
const Employee = db.employees;

// Create and Save a new Employee
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nome) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Employee
    const employee = new Employee({
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      cpf: req.body.cpf,
      email: req.body.email,
      company_id: req.body.company_id
    });
  
    // Save Employee in the database
    employee
      .save(employee)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Employee."
        });
      });
  };

  // Get all employees from company
  exports.getEmployees = (req, res) => {
    const company_id = req.params.id;

    Employee.find({ company_id: company_id })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
  
  };
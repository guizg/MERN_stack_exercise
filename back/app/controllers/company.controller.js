const db = require("../models");
const Company = db.companies;

// Create and Save a new Company
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nome) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Company
    const company = new Company({
      nome: req.body.nome,
      nome_fantasia: req.body.nome_fantasia,
      cnpj: req.body.cnpj,
      endereco: req.body.endereco,
      beneficios: req.body.beneficios,
    });
  
    // Save Company in the database
    company
      .save(company)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Company."
        });
      });
};

// Retrieve all Companies from the database.
exports.findAll = (req, res) => {
  Company.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving companies."
      });
    });
};
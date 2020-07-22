import React, { Component } from "react";
import CompanyDataService from "../services/company.service";
import EmployeeDataService from "../services/employee.service";

export default class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeSobrenome = this.onChangeSobrenome.bind(this);
    this.onChangeCPF = this.onChangeCPF.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
    this.newEmployee = this.newEmployee.bind(this);
    this.retrieveCompanies = this.retrieveCompanies.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveCompany = this.setActiveCompany.bind(this);

    this.state = {
      id: null,
      nome: "",
      sobrenome: "",
      cpf: "",
      email: "",
      company_id: null,
      companies: [],
      currentCompany: null,
      currentIndex: -1,

      submitted: false
    };
  }

  componentDidMount() {
    this.retrieveCompanies();
  }

  retrieveCompanies() {
    CompanyDataService.getAll()
      .then(response => {
        this.setState({
          companies: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveCompanies();
    this.setState({
      currentCompany: null,
      currentIndex: -1
    });
  }

  setActiveCompany(company, index) {
    this.setState({
      currentCompany: company,
      currentIndex: index
    });
  }

  onChangeNome(e) {
    this.setState({
      nome: e.target.value
    });
  }

  onChangeSobrenome(e) {
    this.setState({
      sobrenome: e.target.value
    });
  }

  onChangeCPF(e) {
    this.setState({
      cpf: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }


  saveEmployee() {
    var data = {
      nome: this.state.nome,
      sobrenome: this.state.sobrenome,
      cpf: this.state.cpf,
      email: this.state.email,
      company_id: this.state.currentCompany.id
    };

    EmployeeDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          nome: response.data.nome,
          sobrenome: response.data.sobrenome,
          cpf: response.data.cpf,
          email: response.data.email,
          company_id: response.data.company_id,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newEmployee() {
    this.setState({
        id: null,
        nome: "",
        sobrenome: "",
        cpf: "",
        email: "",
        company_id: null,

        submitted: false
    });
  }

  render() {
    const companies = this.state.companies;
    const currentIndex = this.state.currentIndex;

    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>Funcionário adicionado com sucesso!</h4>
              <button className="btn btn-success" onClick={this.newEmployee}>
                Adicionar outro
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  required
                  value={this.state.nome}
                  onChange={this.onChangeNome}
                  name="nome"
                />
              </div>

              <div className="form-group">
                <label htmlFor="title">Sobrenome</label>
                <input
                  type="text"
                  className="form-control"
                  id="sobrenome"
                  required
                  value={this.state.sobrenome}
                  onChange={this.onChangeSobrenome}
                  name="sobrenome"
                />
              </div>

              <div className="form-group">
                <label htmlFor="title">CPF</label>
                <input
                  type="text"
                  className="form-control"
                  id="cpf"
                  required
                  value={this.state.cpf}
                  onChange={this.onChangeCPF}
                  name="cpf"
                />
              </div>

              <div className="form-group">
                <label htmlFor="title">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  required
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  name="email"
                />
              </div>

              <div>
                <h4>Pertence a empresa:</h4>

                <ul className="list-group">
                    {companies &&
                    companies.map((company, index) => (
                        <li
                        className={
                            "list-group-item " +
                            (index === currentIndex ? "active" : "")
                        }
                        onClick={() => this.setActiveCompany(company, index)}
                        key={index}
                        >
                        {company.nome}
                        </li>
                    ))}
                </ul>
              </div>


              <div>
              <button onClick={this.saveEmployee} className="btn btn-success">
                Enviar!
              </button>
              </div>
            </div>
          )}
        </div>
      );
  }
}

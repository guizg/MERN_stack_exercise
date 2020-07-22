import React, { Component } from "react";
import CompanyDataService from "../services/company.service";
import EmployeeDataService from "../services/employee.service";
import { Link } from "react-router-dom";
import { Table, Tag, Space } from 'antd';

export default class TutorialsList extends Component {
    constructor(props) {
      super(props);
      this.retrieveCompanies = this.retrieveCompanies.bind(this);
      this.refreshList = this.refreshList.bind(this);
      this.setActiveCompany = this.setActiveCompany.bind(this);
  
      this.state = {
        companies: [],
        currentCompany: null,
        currentIndex: -1,
        employees: []
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

        EmployeeDataService.getEmployeesFromCompany(company.id)
        .then(response => {
        this.setState({
            employees: response.data
        });
        console.log(response.data);
        })
        .catch(e => {
        console.log(e);
        });
    }
    
    render() {
        const companies = this.state.companies;
        const currentCompany = this.state.currentCompany;
        const currentIndex = this.state.currentIndex;

        const columns = [
            {
              title: 'Nome',
              dataIndex: 'nome',
              key: 'nome',
            },
            {
              title: 'Sobrenome',
              dataIndex: 'sobrenome',
              key: 'sobrenome',
            },
            {
              title: 'CPF',
              dataIndex: 'cpf',
              key: 'cpf',
            },
            {
              title: 'Email',
              dataIndex: 'email',
              key: 'email',
            },
          ];
        
        return(
          <div className="list row">
            <div className="col-md-6">
              <h4>Empresas</h4>
    
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
            <div className="col-md-6">
              {currentCompany ? (
                <div>
                  <h4>Funcionários</h4>
                  <Table dataSource={this.state.employees} columns={columns}/>

                  {/* <div>
                    <label>
                      <strong>Nome:</strong>
                    </label>{" "}
                    {currentCompany.nome}
                  </div>
                  <div>
                    <label>
                      <strong>Endereço:</strong>
                    </label>{" "}
                    {currentCompany.endereco}
                  </div>
                  <div>
                    <label>
                      <strong>CNPJ:</strong>
                    </label>{" "}
                    {currentCompany.cnpj}
                  </div> */}
    
                </div>
              ) : (
                <div>
                  <br />
                  <p>Selecione uma empresa...</p>
                </div>
              )}
            </div>
          </div>
        );
      }
    }
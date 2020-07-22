import React, { Component } from "react";
import CompanyDataService from "../services/company.service";

export default class AddCompany extends Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeNomeFantasia = this.onChangeNomeFantasia.bind(this);
    this.onChangeCNPJ = this.onChangeCNPJ.bind(this);
    this.onChangeEndereco = this.onChangeEndereco.bind(this);
    this.onChangeBeneficios = this.onChangeBeneficios.bind(this);
    this.saveCompany = this.saveCompany.bind(this);
    this.newCompany = this.newCompany.bind(this);

    this.state = {
      id: null,
      nome: "",
      nomeFantasia: "",
      cnpj: "",
      endereco: "",
      beneficios: "", 

      submitted: false
    };
  }

  onChangeNome(e) {
    this.setState({
      nome: e.target.value
    });
  }

  onChangeNomeFantasia(e) {
    this.setState({
      nomeFantasia: e.target.value
    });
  }

  onChangeCNPJ(e) {
    this.setState({
      cnpj: e.target.value
    });
  }

  onChangeEndereco(e) {
    this.setState({
      endereco: e.target.value
    });
  }

  onChangeBeneficios(e) {
    this.setState({
      beneficios: e.target.value
    });
  }


  saveCompany() {
    var data = {
      nome: this.state.nome,
      nome_fantasia: this.state.nomeFantasia,
      cnpj: this.state.cnpj,
      endereco: this.state.endereco,
      beneficios: this.state.beneficios
    };

    CompanyDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          nome: response.data.nome,
          nome_fantasia: response.data.nomeFantasia,
          cnpj: response.data.cnpj,
          endereco: response.data.endereco,
          beneficios: response.data.beneficios,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newCompany() {
    this.setState({
        id: null,
        nome: "",
        nomeFantasia: "",
        cnpj: "",
        endereco: "",
        beneficios: "", 
  
        submitted: false
    });
  }

  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>Empresa adicionada com sucesso!</h4>
              <button className="btn btn-success" onClick={this.newCompany}>
                Adicionar outra
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
                <label htmlFor="title">Nome Fantasia</label>
                <input
                  type="text"
                  className="form-control"
                  id="nomeFantasia"
                  required
                  value={this.state.nomeFantasia}
                  onChange={this.onChangeNomeFantasia}
                  name="nomeFantasia"
                />
              </div>

              <div className="form-group">
                <label htmlFor="title">CNPJ</label>
                <input
                  type="text"
                  className="form-control"
                  id="cnpj"
                  required
                  value={this.state.cnpj}
                  onChange={this.onChangeCNPJ}
                  name="cnpj"
                />
              </div>

              <div className="form-group">
                <label htmlFor="title">Endereço</label>
                <input
                  type="text"
                  className="form-control"
                  id="endereco"
                  required
                  value={this.state.endereco}
                  onChange={this.onChangeEndereco}
                  name="endereco"
                />
              </div>

              <div className="form-group">
                <label htmlFor="title">Benefícios</label>
                <input
                  type="text"
                  className="form-control"
                  id="beneficios"
                  required
                  value={this.state.beneficios}
                  onChange={this.onChangeBeneficios}
                  name="beneficios"
                />
              </div>
  
              <button onClick={this.saveCompany} className="btn btn-success">
                Enviar!
              </button>
            </div>
          )}
        </div>
      );
  }
}
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


import AddCompany from "./components/add-company.component";
import AddEmployee from "./components/add-employee.component";
import ShowDB from "./components/show-db.component";

class App extends Component{
  render() {
    return(
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/" className="navbar-brand">
              exercício-MERN
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/add-company"} className="nav-link">
                  Adicionar Empresa
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add-employee"} className="nav-link">
                  Adicionar Funcionário
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/show-db"} className="nav-link">
                  Ver Dados
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path="/add-company" component={AddCompany} />
              <Route exact path="/add-employee" component={AddEmployee} />
              <Route exact path="/show-db" component={ShowDB} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

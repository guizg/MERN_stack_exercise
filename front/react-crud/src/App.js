import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
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
            <a href="/companies" className="navbar-brand">
              MERN-example
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add Company
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add-employee"} className="nav-link">
                  Add Employee
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/show-db"} className="nav-link">
                  Show DB
                </Link>
              </li>
            </div>
            {/* <li className="nav-item">
                <Link to={"/companies"} className="nav-link">
                  Companies
                </Link>
              </li> */}
          </nav>

          <div className="container mt-3">
            <Switch>
              {/* <Route exact path={["/", "/companies"]} component={CompanyList} /> */}
              <Route exact path="/add" component={AddCompany} />
              <Route exact path="/add-employee" component={AddEmployee} />
              <Route exact path="/show-db" component={ShowDB} />
              {/* <Route path="/tutorials/:id" component={Tutorial} /> */}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

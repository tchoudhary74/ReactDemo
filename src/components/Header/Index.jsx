import React from "react";
import "./header.css";
import logo from "../../media/icons/Logo.jpg";
import Navbar from "react-bootstrap/Navbar";
import { Nav, FormControl, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function header() {
  return (
    <div>
      <header>
        <div className="row">
          <div className="container">
            <a className="Logo navbar-brand">
              <img
                className="logo center-block"
                src={logo}
                alt="graphic logo "
              />
            </a>
          </div>
        </div>
      </header>
      <div className="navigation-bar">
        <Navbar variant="light">
          <div className="container">
            <Nav className="mr-auto">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/features">Features</NavLink>
              <NavLink to="/pricing">Pricing</NavLink>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </div>
        </Navbar>
      </div>
    </div>
  );
}

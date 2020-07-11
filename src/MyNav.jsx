import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import FoodRecipe from "./FoodRecipe";
import Demo from "./Demo";
import Welcome from "./Welcome";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

const MyNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <Link to="/">Multi Work</Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/foodrecipe">Food Recipes</Link>
              </NavItem>
              <NavItem>
                <Link to="/demo">Demo</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <Switch>
        <Route exact path="/foodrecipe">
          <FoodRecipe />
        </Route>
        <Route exact path="/demo">
          <Demo />
        </Route>
        <Route exact path="/">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
};

export default MyNav;

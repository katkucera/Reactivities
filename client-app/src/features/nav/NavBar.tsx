import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as={NavLink} exact to={"/"} header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Home
        </Menu.Item>
        <Menu.Item
          name="Activities"
          as={NavLink}
          to={"/activities"}
        ></Menu.Item>
        <Menu.Item>
          <Button
            as={NavLink}
            to={"/createActivity"}
            positive
            content="Create Actvity"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;

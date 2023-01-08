import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  let navigate = useNavigate();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            Products
          </Navbar.Brand>

          <Navbar.Brand
            onClick={() => navigate("/add")}
            style={{ cursor: "pointer" }}
          >
            Add
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

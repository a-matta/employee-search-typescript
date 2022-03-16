import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const User: React.FC = () => {
  const [text, setText] = React.useState("");
  return (
    <div className="title">
      <Navbar bg="danger" variant="dark">
        <Navbar.Brand>User Find</Navbar.Brand>
      </Navbar>
      <div className="input-wrapper">
        <input type="text" placeholder="Search User" value={text} />
        <button>Search</button>
      </div>
    </div>
  );
};

export default User;

import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { employee } from "../component/employee.js";

const User: React.FC = () => {
  const [employeeList, setEmployeeList] = React.useState(employee);

  const [text, setText] = React.useState("");
  return (
    <div className="title">
      <Navbar bg="danger" variant="dark">
        <Navbar.Brand>User Find</Navbar.Brand>
      </Navbar>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search User"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Search</button>
        <div className="body">
          {employee?.length > 0 &&
            employee?.map((user) => {
              return (
                <div className="body_item">
                  <h3>Name: {user?.name}</h3>
                  <p>Id: {user?.id}</p>
                  <p>Title: {user?.title}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default User;

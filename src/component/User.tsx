import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { employee } from "../component/employee.js";

const User: React.FC = () => {
  const [employeeList, setEmployeeList] = React.useState<
    { id: number; name: string; title: string }[] | undefined
  >(employee);
  const [text, setText] = React.useState("");

  const handleOnClick = () => {
    const findEmployees =
      employeeList && employeeList?.length > 0
        ? employeeList.filter((emp) => emp?.name === text)
        : undefined;
    console.log(findEmployees);
    setEmployeeList(findEmployees);
  };
  return (
    <div className="title">
      <Navbar bg="danger fixed-top" variant="dark">
        <Navbar.Brand>Employee Search</Navbar.Brand>
      </Navbar>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search User"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setEmployeeList(employee);
          }}
        />
        <button
          className="btn btn-outline-danger"
          disabled={!text}
          onClick={handleOnClick}
        >
          Search
        </button>
        <div className="body">
          {employeeList && employeeList?.length === 0 && (
            <div className="'notFound">No User Found! Please try again!</div>
          )}
          <table className="table table-bordered">
            <tbody>
              {employeeList &&
                employeeList?.length > 0 &&
                employeeList?.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>
                        <p>Name: {user?.name}</p>
                      </td>
                      <td>
                        <p>Id: {user?.id}</p>
                      </td>
                      <td>
                        <p>Title: {user?.title}</p>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;

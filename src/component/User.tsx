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
        <Navbar.Brand className="text-center m-2 p-2">
          Employee Search
        </Navbar.Brand>
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
          className="btn btn-outline-danger m-2 p-2"
          disabled={!text}
          onClick={handleOnClick}
        >
          Search
        </button>
      </div>

      <div className="body">
        {employeeList && employeeList?.length === 0 && (
          <div className="'notFound">No Employee Found! Please try again!</div>
        )}
        <table className="table table-bordered">
          <tbody>
            {employeeList &&
              employeeList?.length > 0 &&
              employeeList?.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>
                      <p>name: {user?.name}</p>
                    </td>
                    <td>
                      <p>id: {user?.id}</p>
                    </td>
                    <td>
                      <p>title: {user?.title}</p>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;

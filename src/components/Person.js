import React from "react";

function Person(props) {
  return (
    <tr>
      <td>
        <img src={props.image} alt="thumbnail" />
      </td>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
    </tr>
  );
}

export default Person;
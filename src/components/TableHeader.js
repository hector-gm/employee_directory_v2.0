import React from "react";
import Person from "./Person";
import moment from "moment";
import Linkify from "react-linkify"

// isNameAscending -> true / false

function mySortAsc(a, b) {
  if (a.fullName > b.fullName) {
    return 1
  }
  if (a.fullName < b.fullName) {
    return -1
  }
  return 0
}
function mySortDesc(a, b) {
  if (a.fullName > b.fullName) {
    return -1
  }
  if (a.fullName < b.fullName) {
    return 1
  }
  return 0
}

function TableHeader(props) {
  console.log("Tableheader: props", props)

  let goodPeople = []
  for (let i = 0; i < props.people.length; i++) {
    let person = props.people[i]
    let lowercaseName = person.fullName.toLowerCase()
    let lowercaseSearch = props.search.toLowerCase()
    if (lowercaseName.includes(lowercaseSearch)) {
      goodPeople.push(person)
    }
  }
  if (props.isNameAscending) {
    goodPeople.sort(mySortAsc)
  } else {
    goodPeople.sort(mySortDesc)
  }

  const personComponents = goodPeople.map(person => {
    let coolDate = moment(person.fixedDate).format("MM/DD/YYYY")
    let linkedUp = <Linkify>{person.email}</Linkify>
    return (
      <Person
        image={person.picture.thumbnail}
        name={person.fullName}
        phone={person.phone}
        email={linkedUp}
        dob={coolDate}
      />
    )
  })

  return (
    <div>
      <table id="table">
        <tr>
          <th>Image </th>
          <th style={{ cursor: "pointer" }} onClick={props.handleClick}>
            Name {props.isNameAscending ? "\u25b2" : "\u25bc"}
          </th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
        {personComponents}
      </table>
    </div>
  );
}

export default TableHeader;
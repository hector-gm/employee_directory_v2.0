import React from "react";
import "./App.css";
import Header from "./components/Header";
import TableHeader from "./components/TableHeader";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: "",
      peopleArray: [],
      isAlphabetical: true,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ isAlphabetical: !this.state.isAlphabetical })
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=25")
      .then(response => response.json())
      .then(response => {
        for (let i = 0; i < response.results.length; i++) {
          let curResult = response.results[i]
          curResult.fullName = curResult.name.first + " " + curResult.name.last
          curResult.fixedDate = curResult.dob.date
        }
        this.setState({ peopleArray: response.results })
      })
  }
  render() {
    let searchState = this.state.search

    return (
      <div>
        <Header />
        <input
          value={searchState}
          onChange={e => this.setState({ search: e.target.value })}
        />
        <TableHeader
          search={searchState}
          people={this.state.peopleArray}
          isNameAscending={this.state.isAlphabetical}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default App;
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
  }

  render() {
    return(
      <div>
        <ul style={{listStyleType: "none", padding: 0, margin: "10px 0 0 10px"}}>
          {this.state.peopleInSpace.map(spacefolk => <li key="{spacefolk.id}" style={{marginBottom: "5px"}}>{spacefolk.name}</li>)}
        </ul>
      </div>
    )
  }
}
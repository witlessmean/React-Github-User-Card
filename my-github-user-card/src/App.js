import React from "react";
import axios from "axios";
import Card from "./components/Card.jsx";
import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
    };
  }

  componentDidMount() {
      axios.get('https://api.github.com/users/witlessmean')
      .then(response => {
        console.log( response);
        this.setState({
          user: response.data
        });
      }).catch(error => {
        console.log("Error Message", error)
      });

      axios.get('https://api.github.com/users/witlessmean/followers')
      .then(response => {

        this.setState({
          followers: response.data
        })
      }).catch(error => {
        console.log(error)
      });
  }

  render() {
    return (
      <Flex>
        <Card user={this.state.user} followers={this.state.followers} />
      </Flex>
    );
  }
}

export default App;

import React, { Component } from "react";
import styled from "styled-components";
import { Router } from "@reach/router";
import Todos from "./components/Todos";
import Fridge from "./components/Fridge";
import Meals from "./components/Meals";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage"

import Firebase, { FirebaseContext } from './services/Firebase';

const AppBackground = styled.div`
  height: 100vh;
  background: #eeeeee;
`;

class App extends Component {
  render() {
    return (
      <FirebaseContext.Provider value={new Firebase()}>
        <AppBackground>
          <Router>
            <Todos path="/" />
            <Fridge path="fridge" />
            <Meals path="meals" />
            {/* <Recipes path="recipes" /> */}
          </Router>
          <Navbar />
        </AppBackground>
      </FirebaseContext.Provider>
    );
  }
}

export default App;

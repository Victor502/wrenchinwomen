import React from "react";
import logo from "./logo.svg";
import mechanic from "./mechanic.png";
import MainButton from "./components/MainButton";
import Jumbotron from 'react-bootstrap/Jumbotron'

import "./App.css";

function App() {
  const onClickPress = () => {
    console.log("Help");
    const url = "https://forms.gle/mWgeyzUePkrWdq4J9";
    window.open(url, "_blank");
  };
  return (
    <div className="App">
    <div className="Pink-Box" />
      <header className="App-header">
        <p className="mb-5">Coming Soon!</p>
        <img src={mechanic} className="App-logo" alt="logo" />
      </header>
      <div className="Pink-Box" />
      <Jumbotron>
        <h1 className="Main-Headline">Wrench'n Women</h1>
        <p  className="Sub-Title">
          Sign up to be notified when the site is ready and to help decide what
          we will learn together.
        </p>
        <p>
        <MainButton
          variant="outline-primary"
          title="Sign Up Here"
          onClick={onClickPress}
        />
        </p>
      </Jumbotron>
    </div>
  );
}

export default App;

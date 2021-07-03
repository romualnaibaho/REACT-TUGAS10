import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";

import Navigation from "./Layouts/Navigation";
import Header from "./Layouts/Header";

class App extends Component {
  render(){
    return (
      <div>
        <Navigation/>
        <Header/>
      </div>
    );
  }
}

export default App;

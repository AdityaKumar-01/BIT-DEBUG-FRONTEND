import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import ProjectPage from "./Page/ProjectPage/ProjectPage";
import DashboardPage from "./Page/DashboardPage/DashboardPage";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      currentUser: null
    }
  }
  // () => auth.signOut()
  unsubscribeFromAuth = null;
  componentDidMount(){
     this.unsubscribeFromAuth = auth.onAuthStateChanged( user =>{
       this.setState({currentUser:user})
       
     });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
    auth.signOut();
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/project" exact component={ProjectPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

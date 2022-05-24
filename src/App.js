import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Header } from "./components";
import { Accessories,Tv,Gadget,Iphones,Speakers,Mcloth,Wcloth } from "./pages";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
      
        <Switch>
         <Route exact path='/' component={Header} />
          <Route path='/accessories' component={Accessories} />
          <Route path='/tv' component={Tv} />
          <Route path='/gadget' component={Gadget} />
          <Route path='/iphone' component={Iphones} />
          <Route path='/speaker' component={Speakers} />
          <Route path='/cloth' component={Mcloth} />
          <Route path='/wcloth' component={Wcloth} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

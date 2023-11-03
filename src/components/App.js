import React from "react";
import { Route, Switch, BrowserRouter} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { movies, directors, actors } from "../data";

function App() {
 
  return <div>
    <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route path="/directors"> <Directors directors={directors}/></Route>
    <Route path= "/actors"><Actors actors={actors}/></Route>
   <Route path="/movies">
    <Movies movies={movies}/></Route>
    <Route path= "/" component={Home}/>
    </Switch>
    </BrowserRouter>


  </div>;
 
}

export default App;

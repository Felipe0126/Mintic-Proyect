import React from "react";
import { 
  BrowserRouter,
  Switch,
  Route,
 } from "react-router-dom";

 import Inicio from "../pages/Inicio";
 import PlanesViaje from "../pages/PlanesViaje";
import Registro from "../pages/Registro";
import Reservas from "../pages/Reservas";
import Usuario from "../pages/Usuario";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio}/>
        <Route exact path="/planesviaje" component={PlanesViaje}/>
        <Route exact path="/registro" component={Registro}/>
        <Route exact path="/reservas" component={Reservas}/>
        <Route exact path="/usuario" component={Usuario}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

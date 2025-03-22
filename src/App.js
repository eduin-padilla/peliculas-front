import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./components/ui/Header";
import { GeneroView } from "./components/genero/GeneroView";
import { MediaView } from "./components/media/MediaView";
import { ProductoraView } from "./components/productora/ProductoraView";
import { TipoView } from "./components/tipo/TipoView";
import DirectorView from "./components/director/DirectorView"; // Aquí NO debes usar llaves



function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MediaView} />
        <Route exact path="/director" component={DirectorView} />
        <Route exact path="/genero" component={GeneroView} />
        <Route exact path="/productora" component={ProductoraView} />
        <Route exact path="/tipo" component={TipoView} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;

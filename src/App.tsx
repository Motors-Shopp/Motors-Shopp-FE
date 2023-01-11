// import VehicleCard from "./components/vehicleCard/index"
// import Footer from "./components/footers/footer";
// import Header from "./components/header/index";
import Announcement from "./pages/announcements/Announcement";
import Header from "./components/header/index";

import { Switch, Route } from "react-router-dom";

import LoginFrom from "./components/loginFrom/index";
import CadastroFrom from "./components/cadastroForm/index";
// import NavBar from "./components/navBar";

function App() {
  return (
    <Switch>
      <Route exact path="/home">
        <Header></Header>
      </Route>
      <Route exact path="/comentarios/:id">
        <Announcement></Announcement>
      </Route>
      <Route exact path="/home/:id">
        <Header></Header>
      </Route>
      <Route exact path="/">
        <LoginFrom></LoginFrom>
      </Route>
      <Route exact path="/cadastro">
        <CadastroFrom></CadastroFrom>
      </Route>
    </Switch>
  )}
export default App;

import Hero from "./components/Hero/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { GlobalStyle } from "./components/GlobalStyle";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pizzas from "./pages/Pizzas";
import Deserts from "./pages/Deserts";
import FullMenu from "./pages/FullMenu";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Hero />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pizzas" component={Pizzas} />
          <Route path="/deserts" component={Deserts} />
          <Route path="/full-menu" component={FullMenu} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

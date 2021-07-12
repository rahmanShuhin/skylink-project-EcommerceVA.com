import "./styles/App.css";
import "./styles/App.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing";
import Services from "./components/Services/Services";
import WatchVideo from "./components/WatchVideo/WatchVideo";
import Automated from "./components/Automated/Automated";
import Results from "./components/Results/Results";
import GetStart from "./components/GetStart/GetStart";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import { useEffect } from "react";
import Home from "./components/Home/Home";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Router>
      <Switch>
        <div className="App">
          <Nav></Nav>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/amazon/">
            <Landing
              title={"Get Fully Automated"}
              after={"Amazon Store"}
              description={"Through our Management Service, you will be able to create,modify, and scale 100% of your E-Commerce business."}
            ></Landing>
            <Services></Services>
            <WatchVideo></WatchVideo>
            <Automated></Automated>
            <Results></Results>
            <GetStart></GetStart>
          </Route>
          <Route exact path="/walmart/">
            <Landing
              title={"Get Your Own"}
              after={"Automated Walmart Store"}
              description={"Through our Management Service, you will be able to create,modify, and scale 100% of your E-Commerce business."}
            ></Landing>
            <Services></Services>
            <WatchVideo></WatchVideo>
            <Automated></Automated>
            <Results></Results>
            <GetStart></GetStart>
            <Contact></Contact>
          </Route>
          <Route exact path="/fb-dropship/">
            <Landing
              title={"Get Your Own"}
              after={"FB Dropship Store"}
              description={"Through our Management Service, you will be able to create,modify, and scale 100% of your E-Commerce business."}
            ></Landing>
            <Services></Services>
            <WatchVideo></WatchVideo>
            <Automated></Automated>
            <Results></Results>
            <GetStart></GetStart>
            <Contact></Contact>
          </Route>
          <Route exact path="/request-a-call/">
            <Contact></Contact>
          </Route>
          <Footer></Footer>
        </div>
      </Switch>
    </Router>
  );
}

export default App;

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
import Trusted from "./components/Trusted/Trusted";

function App() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <Router>
            <Switch>
                <div className="App">
                    <Route exact path="/">
                        <Nav to={"/"}></Nav>
                        <Home></Home>
                    </Route>
                    <Route exact path="/amazon/">
                        <Nav to={"/amazon/"}></Nav>
                        <Landing
                            title={"Get Fully Automated"}
                            after={"Amazon Store"}
                            description={
                                "Through our Management Service, you will be able to create,modify, and scale 100% of your E-Commerce business."
                            }
                        ></Landing>
                        <Trusted></Trusted>
                        <Services></Services>
                        <WatchVideo></WatchVideo>
                        <Results></Results>
                        {/* <GetStart></GetStart> */}
                        <Automated></Automated>
                        <Contact></Contact>
                    </Route>
                    <Route exact path="/walmart/">
                        <Nav to={"/walmart/"}></Nav>
                        <Landing
                            title={"Get Your Own"}
                            after={"Automated Walmart Store"}
                            description={
                                "Through our Management Service, you will be able to create,modify, and scale 100% of your E-Commerce business."
                            }
                        ></Landing>
                        <Trusted></Trusted>
                        <Services></Services>
                        <WatchVideo></WatchVideo>
                        <Results></Results>
                        {/* <GetStart></GetStart> */}
                        <Automated></Automated>
                        <Contact></Contact>
                    </Route>
                    <Route exact path="/fb-dropship/">
                        <Nav to={"/fb-dropship/"}></Nav>
                        <Landing
                            title={"Get Your Own"}
                            after={"FB Dropship Store"}
                            description={
                                "Through our Management Service, you will be able to create,modify, and scale 100% of your E-Commerce business."
                            }
                        ></Landing>
                        <Trusted></Trusted>
                        <Services></Services>

                        <WatchVideo></WatchVideo>

                        <Results></Results>
                        {/* <GetStart></GetStart> */}
                        <Automated></Automated>
                        <Contact></Contact>
                    </Route>

                    <Footer></Footer>
                </div>
            </Switch>
        </Router>
    );
}

export default App;

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
                                "We ensure your Amazon store is set up and ready to be successfully automated whether it is brand new or an aged store transferred to our management teams."
                            }
                            to={"/amazon/"}
                        ></Landing>
                        <Trusted></Trusted>
                        <Services
                            store={"Amazon"}
                            service1={
                                "The purpose of an Amazon automation business is to earn passive income without lifting a finger. This is what our team does for clients while targeting a 15%-35% profit margin. Amazon Automation client stores hold a market value of over $1 million after 18 months of operating with us on average"
                            }
                        ></Services>
                        <WatchVideo to={"/amazon/"}></WatchVideo>
                        <Results></Results>
                        {/* <GetStart></GetStart> */}
                        <Automated
                            text1={"In the Amazon store automation market, "}
                        ></Automated>
                        <Contact></Contact>
                    </Route>
                    <Route exact path="/walmart/">
                        <Nav to={"/walmart/"}></Nav>
                        <Landing
                            title={"Get Fully Automated "}
                            after={"Walmart Store"}
                            description={
                                "We ensure your Walmart store is set up and ready to be successfully automated whether it is brand new or an aged store transferred to our management teams."
                            }
                            to={"/walmart/"}
                        ></Landing>
                        <Trusted></Trusted>
                        <Services
                            store={"Walmart"}
                            service1={
                                "We use modern techniques to convert your Walmart store into a successful Dropshipping Store that is totally Automated and allows you to earn even while you sleep. This is what our teams largely do for clients while targeting a 15%-25% profit margin. Additionally, most Walmart Automation client stores earn their first thousand dollars in profit within 2 weeks of launching!"
                            }
                        ></Services>
                        <WatchVideo to={"/walmart/"}></WatchVideo>
                        <Results></Results>
                        {/* <GetStart></GetStart> */}
                        <Automated
                            text1={"In the Walmart store automation market, "}
                        ></Automated>
                        <Contact></Contact>
                    </Route>
                    <Route exact path="/fb-dropship/">
                        <Nav to={"/fb-dropship/"}></Nav>
                        <Landing
                            title={"Get Fully Automated "}
                            after={"FB Dropshipping Store"}
                            description={
                                "We ensure your Facebook dropshipping store is set up and ready to be successfully automated whether it is brand new or an aged store transferred to our management teams."
                            }
                            to={"/fb-dropship/"}
                        ></Landing>
                        <Trusted></Trusted>
                        <Services
                            store={"FB Dropshipping"}
                            service1={
                                "We do Facebook dropshipping store management. The purpose of a Facebook dropshipping automation business is to earn passive income without lifting a finger. Our team can generate a very good amount of sales every day with an excellent profit margin since Facebook only charges a 5% fee."
                            }
                        ></Services>

                        <WatchVideo to={"/fb-dropship/"}></WatchVideo>

                        <Results></Results>
                        {/* <GetStart></GetStart> */}
                        <Automated
                            text1={
                                "In the Facebook dropshipping store automation market, "
                            }
                        ></Automated>
                        <Contact></Contact>
                    </Route>

                    <Footer></Footer>
                </div>
            </Switch>
        </Router>
    );
}

export default App;

import './App.css';
import Login from "./modules/login/login";
import Register from "./modules/register/Register";
import React from "react";
import Home from "./modules/home/Home";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Navbar from "./modules/navbar/Navbar";

let App = ()=>{
    return (
        <React.Fragment>
            <Router>
                <Navbar></Navbar>

                <Routes>
                    <Route exact={true} path={"/"} element={<Home/>}>

                    </Route>

                    <Route exact={true} path={"/users/login"} element={<Login/>}>

                    </Route>

                    <Route exact={true} path={"/users/register"} element={<Register/>}>

                    </Route>


                </Routes>
            </Router>
        </React.Fragment>
    )
}

export default App;

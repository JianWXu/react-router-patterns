import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Whiskey from "./Whiskey"
import Duke from "./Duke"
import Perry from "./Perry"
import Tubby from "./Tubby"

function Routes(){
    return(
        <Switch>
            <Route exact path="/dogs/whiskey"><Whiskey/></Route>
            <Route exact path="/dogs/Duke"><Duke/></Route>
            <Route exact path="/dogs/Perry"><Perry/></Route>
            <Route exact path="/dogs/Tubby"><Tubby/></Route>
            <Route exact path="/dogs"><Dogs/></Route>
            <Redirect to="/dogs" />
        </Switch>
    )
}

export default Routes;
import React from "react";
import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";

import SpaceComponent from './components/space/space';
import CreateCourses from './components/space/create-course/create-course';

function Routes() {
    let location = useLocation();
    let locStr = location.pathname.split(',');

    return (
        <>
            
            <Switch>
                <Route path="/space/:view">
                    <SpaceComponent />
                </Route>
                <Route  exact path="/">
                    <CreateCourses />
                </Route>
            </Switch>
        </>
    );
}

export default Routes;

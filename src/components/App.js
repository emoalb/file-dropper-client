import React from 'react';
import "../App.css"
import UploadPage from "./UploadPage";
import {
    Switch,
    Route
} from "react-router-dom";
import ListFilesPage from "./ListFilesPage";
import NavBar from "./NavBar";
const App = (props) => {

    return (
        <div className="App">
         <NavBar/>
            <Switch>
                <Route path="/list-files">
                    <ListFilesPage/>
                </Route>
                <Route path="/">
                    <UploadPage/>
                </Route>
            </Switch>
        </div>
    )
}

export default App
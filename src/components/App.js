import React from 'react';
import UploadPage from "./UploadPage";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import ListFilesPage from "./ListFilesPage";
const App = (props) => {

    return (
        <div className="App">
            <nav>
                <h1>Spring Cloud Beta 0.0.3</h1>
                <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/"}>Upload</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/list-files"}>List Files</Link>
                    </li>
                </ul>
            </nav>
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
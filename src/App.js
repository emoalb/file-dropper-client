import React from 'react';
import {useRoutes} from 'hookrouter';
import UploadPage from "./UploadPage";
import AppBar from "./AppBar";
import NotFoundPage from "./NotFoundPage";
//const urlIP = "87.120.103.179:8000"
//const urlLocalhost = "localhost:8000"
const routes = {
    '/': () => <UploadPage/>,
}
const App = (props) => {
    const routeResult = useRoutes(routes);
    return (
        <div className="App">
            <AppBar/>
            {routeResult||<NotFoundPage/>}
        </div>
    )
}

export default App
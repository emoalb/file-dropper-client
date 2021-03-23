import React from 'react';


import UploadPage from "./UploadPage";
import AppBar from "./AppBar";
//const urlIP = "87.120.103.179:8000"
//const urlLocalhost = "localhost:8000"
function App(props) {
    return (
        <div className={'app'}>
            <AppBar/>
            <UploadPage/>
        </div>
    )
}

export default App
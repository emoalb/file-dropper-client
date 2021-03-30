import React from 'react';

import UploadPage from "./UploadPage";
import AppBar from "./AppBar";
import {ToastProvider} from "react-toast-notifications";
//const urlIP = "87.120.103.179:8000"
//const urlLocalhost = "localhost:8000"
const App = (props) => {
    return (
        <div className={'app'}>
            <AppBar/>
            <ToastProvider >
            <UploadPage/>
            </ToastProvider>
        </div>
    )
}

export default App
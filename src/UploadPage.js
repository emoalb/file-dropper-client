import {ToastProvider} from "react-toast-notifications";
import React from "react";
import UploadPageChild from "./UploadPageChild";

const UploadPage = () => {
    return (
        <ToastProvider>
            <UploadPageChild/>
        </ToastProvider>
    )
}
export default UploadPage;
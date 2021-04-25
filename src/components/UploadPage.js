import {ToastProvider} from "react-toast-notifications";
import React from "react";
import UploadPageChild from "./UploadPageChild";

const UploadPage = () => {
    return (
        <section id={"upload-page"}>
            <ToastProvider>
                <UploadPageChild/>
            </ToastProvider>
        </section>
    )
}
export default UploadPage;
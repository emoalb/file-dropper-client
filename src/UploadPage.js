import Dropzone from "react-dropzone-uploader";
import 'react-dropzone-uploader/dist/styles.css'
import { useToasts} from 'react-toast-notifications';
import React from "react";

const UploadPage = () => {

    const {addToast} = useToasts();
    const getUploadParams = () => {
        return {url: 'http://localhost:8666/api/uploadFile'}
    }

    const handleChangeStatus = ({meta}, status) => {
        console.log(meta,status);

        console.log(status, meta);
        if (status === "preparing") {
            addToast(status, {appearance: 'info',autoDismiss:4});
        }
        if (status === "done") {
            addToast(status, {appearance: 'success',autoDismiss:4});
        }
        if (status === "exception_upload") {
            addToast(status, {appearance: 'error',autoDismiss:4});
        }
    }

    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    return (

        <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            styles={{dropzone: {minHeight: 200, maxHeight: 250}}}
        />

    )
}
export default UploadPage;
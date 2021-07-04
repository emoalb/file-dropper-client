import * as React from "react";
import dateFormat from "dateformat";
import axios from "axios";
import {Config} from "../config/Config";
import FileDownload from "js-file-download";
import {useState} from "react";


const FileComponent = (props) => {
    const [progress, setProgress] = useState(0);
    // eslint-disable-next-line
    let fileName = props.item.fname;
    let fileDate = dateFormat(props.item.date, "yyyy-mm-dd HH:MM:ss");
    let fileSize = (props.item.size.toFixed(2).trim().length <= 8)
        ? ((props.item.size / 1024).toFixed(2) + " KB") : ((props.item.size / (1024 * 1024)).toFixed(2) + " MB")
    console.log(fileName + "  " + props.item.size.toFixed(2).trim() + "  " + props.item.size.toFixed(2).trim().length)

    const downloadFile = () => {
        console.log("Trying to download file with name " + fileName)

        axios.request({
            url: Config.DEV_URL + "api/downloadFile/" + fileName,
            method: 'GET',
            responseType: 'blob',
            onDownloadProgress: (evt) => {
                setProgress((evt.loaded / evt.total) * 100)
                console.log((evt.loaded / evt.total) * 100)
            }
        }).then((response) => {
            setProgress(0)
            FileDownload(response.data, fileName);
        });
    }

    return (
        <tr key={props.index}>
            <th>{fileName}</th>
            <th>{fileSize}</th>
            <th>{fileDate}</th>
            <th>
                <button onClick={downloadFile}>Download</button>
            </th>
            {!(progress === 0) ? <th>{progress}</th> : <></>}
        </tr>
    )

}
export default FileComponent;
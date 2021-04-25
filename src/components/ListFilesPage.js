import React, {useState} from 'react';
import {useFetch} from "../hooks/UseFetchHook";
import {Config} from "../config/Config";



const ListFilesPage = () => {
    const [data, loading] = useFetch(Config.DEVURL + "api/getFileList")


    return (
        <section id={"all-files-page"}>
            {
                loading ? ("Loading....") : (data.length === 0 ? noFilesComponent() :
                    data.map((d, index) =>
                        myFileComponent(d, index)))
            }
        </section>
    )

}

const downloadFile = (file) => {
    console.log("Trying to download file with name " + file)
    fetch(Config.DEVURL + "api/downloadFile/" + file).then(response => {
        response.blob().then(blob => {
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.href = url;
            a.download = file;
            a.click();
        });
    })
}
const noFilesComponent = () => {
    return (
        <p>No files Yet!</p>
    )
}
const myFileComponent = (file, key) => {
    return (
        <p key={key}>{file}
            <button onClick={downloadFile.bind(this, file)}>Download</button>
        </p>
    )
}
export default ListFilesPage;
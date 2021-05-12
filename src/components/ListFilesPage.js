import React from 'react';
import {useFetch} from "../hooks/UseFetchHook";
import {Config} from "../config/Config";
import PageComponent from "./PageComponent";

const ListFilesPage = () => {
    const [data, loading] = useFetch(Config.DEV_URL + "api/getFileListGson")
    return (
        <section id={"all-files-page"}>
            {
                loading ? (<div className={"loader"}>Loading...</div>) : (data.length === 0 ? (noFilesComponent()) :
                   <PageComponent items ={data} onAction = {downloadFile}/>)
            }
        </section>
    )
}

const downloadFile = (file) => {
    console.log("Trying to download file with name " + file)
    fetch(Config.DEV_URL + "api/downloadFile/" + file)
        .then(response => {
        response.blob().then(blob => {
           // let urlReact = ReactDom.render(<a href={blob}/>,document.getElementById("app"))
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
// const myFileComponent = (file, key) => {
//     return (
//         <p key={key}>{file}
//             <button onClick={downloadFile.bind(this, file)}>Download</button>
//         </p>
//     )
// }

export default ListFilesPage;
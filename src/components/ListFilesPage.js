import React from 'react';
import {useFetch} from "../hooks/UseFetchHook";
import {Config} from "../config/Config";

const ListFilesPage = () => {

    const [data, loading] = useFetch(Config.DEVURL+"api/getFileList")


    return (
        <section id={"all-files"}>
            {
                loading ? ("Loading....") :
                    data.map((d, index) =>
                        myFileComponent(d, index))

            }
        </section>
    )

}

 const downloadFile = (file)=> {
console.log("Trying to download file with name "+ file)
}

const myFileComponent = (file, key) => {
    return (
        <p key={key}>{file}<button onClick={downloadFile.bind(this,file)}>Download</button></p>
    )
}

export default ListFilesPage;
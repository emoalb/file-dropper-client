import React from 'react';
import {useFetch} from "../hooks/UseFetchHook";

const ListFilesPage = () => {

    const [data, loading] = useFetch("http://localhost:8666/api/getFileList")


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
const myFileComponent = (file, key) => {
    return (
        <p key={key}>{file}</p>
    )
}
export default ListFilesPage;
import React from 'react';
import {useFetch} from "../hooks/UseFetchHook";
import {Config} from "../config/Config";
import PageComponent from "./PageComponent";


const ListFilesPage = () => {
    const [data, loading] = useFetch(Config.DEV_URL + "api/getFileListGson")
    return (
        <section id={"all-files-page"}>
            {
                loading ? (<div className={"loader"}>Loading...</div>) : (data.length === 0 ? <NoFilesComponent/> :
                    <PageComponent items={data}/>)
            }
        </section>
    )
}
const NoFilesComponent = () => {
    return (
        <p>No files Yet!</p>
    )
}
export default ListFilesPage;
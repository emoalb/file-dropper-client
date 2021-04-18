import React from 'react';
import {useFetch} from "./UseFetchHook";

const ListFilesPage = ()=>{

 const [data,loading] = useFetch("http://localhost:8666/api/getFileList")


    return (
        <div>
            {
                loading?("Loading...."):<p> {data}</p>
            }
        </div>
    )

}
const myFileComponent = (file,key) =>{
    return(

    <p key={key}>{file}</p>

    )
}
export default ListFilesPage;
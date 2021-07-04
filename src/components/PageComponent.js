import {useState} from "react"
import * as React from "react";
import ExpireMessage from "./ExpireMessage";
import FileComponent from "./FileComponent";

const PaginationComponent = (props) => {
    const defaultItemsPerPage = 10
    let pageInput = React.createRef();
    // eslint-disable-next-line
    const [itemsList, setItemsList] = useState(props.items)
    const [currentPage, setCurrentPage] = useState(1)
    const [isNumberValid, setIsNumberValid] = useState(true)
    const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage)
    const indexOfLastTodo = currentPage * itemsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
    const currentTodos = itemsList.slice(indexOfFirstTodo, indexOfLastTodo);
    const pageNumbers = [];

    const renderItems = currentTodos.map((item, index) => {

        return (
            <FileComponent item={item} index={index}/>

        )
    });
    const handleNavigationCLick = (event) => {
        event.preventDefault()
        if (isNaN(pageInput.current.value) || pageInput.current.value > pageNumbers.length || pageInput.current.value < 1) {
            setIsNumberValid(false)
        } else {
            let pageInputNum = Number(pageInput.current.value)
            setIsNumberValid(true)
            setCurrentPage(pageInputNum)
        }
        pageInput.current.value = ""
    }
    for (let i = 1; i <= Math.ceil(itemsList.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    const handleClick = (event) => {
        event.preventDefault()
        setCurrentPage(Number(event.target.id))
    }
    const renderPageNumbers = pageNumbers.map(number => {
        let isCurrent = number === currentPage

        return (
            <li
                className={isCurrent ? "current-page" : ""}
                key={number}
                id={number}
                onClick={handleClick}
            >
                {number}
            </li>
        );
    });


    const handleItemsPerPage = (event) => {
        setItemsPerPage(Number(event.target.value))
        setCurrentPage(1)
    }

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>File name</th>
                    <th>Size</th>
                    <th>Date created</th>
                </tr>
                </thead>
                <tbody>
                {renderItems}
                </tbody>
            </table>
            <ul id={"page-numbers"}>
                {renderPageNumbers}
            </ul>
            <div id={"page-nav"}>
                <form id="page-form">
                    <label className="form-item" htmlFor={"page-input"}>Go to page: </label>
                    <input  className="form-item" id="page-input" type={"text"} ref={pageInput}/>
                    <label  className="form-item" htmlFor="items-per-page">Items per page:</label>
                    <select  className="form-item" defaultValue={defaultItemsPerPage} id="items-per-page" onChange={handleItemsPerPage}>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="30">30</option>
                        <option value="100">100</option>
                    </select>
                    <button  className="form-item" onClick={handleNavigationCLick}>Go!</button>
                    {!isNumberValid ? (<ExpireMessage  className="form-item" callback={() => {
                            setIsNumberValid(true)
                        }} delay={1000}>
                            <p id={"message-incorrect-number-option"}>Not a valid page option</p>
                        </ExpireMessage>) :
                        (<div/>)}

                </form>
            </div>
        </div>
    )

};


export default PaginationComponent;
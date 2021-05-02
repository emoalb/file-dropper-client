import {useState} from "react"

const PaginationComponent = (props) => {
    // eslint-disable-next-line
    const [itemsList, setItemsList] = useState(props.items)
    const [currentPage, setCurrentPage] = useState(1)
    // eslint-disable-next-line
    const [itemsPerPage, setItemsPerPage] = useState(10)

    const indexOfLastTodo = currentPage * itemsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
    const currentTodos = itemsList.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((item, index) => {
        return <li key={index}>{item} <button onClick={props.onAction.bind(this, item)}>Download</button></li>;
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(itemsList.length /itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
        const handleClick = (event)=>{
            setCurrentPage(Number(event.target.id))
        }

        return (
            <li
                key={number}
                id={number}
                onClick={handleClick}
            >
                {number}
            </li>
        );
    });
  return(
      <div>
          <ul>
              {renderTodos}
          </ul>
          <ul id="page-numbers">
              {renderPageNumbers}
          </ul>
      </div>
  )

};





export default PaginationComponent;
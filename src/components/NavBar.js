import React from "react";
import {Link} from "react-router-dom";

const NavBar = (props) => {
    return (
        <nav>
            <h1>Spring Cloud Beta 0.0.3</h1>
            <ul className="nav nav-pills card-header-pills">
                <li className="nav-item">
                    <Link className="nav-link" to={"/"}>Upload</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/list-files"}>List Files</Link>
                </li>
            </ul>
        </nav>
    )

}

export default NavBar;
import React from "react";
import {Link} from "react-router-dom";



const NavBar = (props) => {

    return (
        <nav>
            <h1>Spring Cloud Beta 0.0.3</h1>
            <ul className="nav nav-pills card-header-pills">
                <LinkComponent caption="Upload Files" href="/"/>
                <LinkComponent caption="List Files" href="/list-files"/>
            </ul>
        </nav>
    )

}

const LinkComponent = (props) => {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={props.href}>{props.caption}</Link>
        </li>
    )
}

export default NavBar;
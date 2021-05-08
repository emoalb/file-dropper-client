import React from "react";
import {Link} from "react-router-dom";
import {Config} from "../config/Config";



const NavBar = (props) => {

    return (
        <nav>
            <h1>Spring Cloud Beta {Config.VER_NUMBER}</h1>
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
import React from 'react';

function AppBar() {
    return (
        <nav>
            <h1>Spring Cloud Beta 0.0.3</h1>
            <ul className="nav nav-pills card-header-pills">
                <li className="nav-item">
                    <a className="nav-link" href="#">Upload</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">List Files</a>
                </li>
            </ul>
        </nav>
    )
}

export default AppBar;
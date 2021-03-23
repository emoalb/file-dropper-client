import React from 'react';

function AppBar() {
    return (
        <nav>
            <h1>Spring Cloud Beta 0.0.3</h1>
            <ul className="nav nav-pills card-header-pills">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        </nav>
    )
}

export default AppBar;
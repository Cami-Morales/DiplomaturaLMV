import { Link } from "react-router-dom";
import React from 'react';
const Nav = (props) => {
    return (

        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/ejemplo1">Ejemplo1</Link></li>
                <li><Link to="/ejemplo2">Ejemplo2</Link></li>
                <li><Link to="/ejemplo3">Ejemplo3</Link></li>
                <li><Link to="/ejemplo4">JSON</Link></li>
                <li><Link to="/ejemplo5">API</Link></li>

            </ul>
        </nav>


    )
}

export default Nav;
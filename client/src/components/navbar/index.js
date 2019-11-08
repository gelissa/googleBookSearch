import React, { Component } from "react";
import {
    BrowserRouter as Router,
	Link
} from 'react-router-dom';
import "./style.css"

class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <Router>
                        <Link to="/" className="brand-logo">Logo</Link>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link to="sass.html">Sass</Link></li>
                                <li><Link to="badges.html">Components</Link></li>
                                <li><Link to="collapsible.html">JavaScript</Link></li>
                            </ul>
                        </Router>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;
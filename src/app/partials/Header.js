import React from "react";
import {Link, withRouter } from 'react-router-dom';


const Header = (props) => {
    
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="nav-wrapper">
                        <Link to='/' className="brand-logo left">Reports Administration</Link>
                        <ul id="nav-mobile" className="right">
                            <li className={props.location.pathname === '/' ? 'active' : ''}><Link to='/'>Reports</Link></li>
                            <li className={props.location.pathname === '/submit' ? 'active' : ''}><Link to='/submit'>Create Report</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default withRouter(Header);
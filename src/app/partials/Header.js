import React from "react";
import {Link} from 'react-router-dom';


const Header = (props) => {

    return (
        <header>
            <div className="container">
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo left">Reports Administration</a>
                        <ul id="nav-mobile" className="right">
                            <li className='active'><Link to=''>Reports</Link></li>
                            <li><Link to=''>Create Report</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;
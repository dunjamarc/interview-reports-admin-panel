import React from "react";
import {Link} from 'react-router-dom';


const Header = (props) => {

    return (
        <header>
            <div className="container">
                <nav>
                    <div className="nav-wrapper">
                        <Link to='/' className="brand-logo left">Reports Administration</Link>
                        <ul id="nav-mobile" className="right">
                            <li className='active'><Link to='/'>Reports</Link></li>
                            <li><Link to='/submit'>Create Report</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;
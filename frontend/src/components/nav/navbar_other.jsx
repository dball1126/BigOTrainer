import React from 'react';
import {Link} from 'react-router-dom';

const NavBarOther = () => {
    return (
        <div className="navbar-other-container">
            <div className="bigo-box">
                <Link to={"/"}><img src="https://i.imgur.com/emF2ura.png" className="back-arrow" /></Link>
            </div>
        </div>
    );
}

export default NavBarOther;
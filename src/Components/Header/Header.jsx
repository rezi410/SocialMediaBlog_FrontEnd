import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitleLg'>Social Media Blog</span>
            </div>
            <img 
            className='headerImg'
            src="https://media.gettyimages.com/id/1179042196/photo/teenage-women-friend-group-enjoying-state-fair.jpg?s=612x612&w=gi&k=20&c=s2-T9f35EV4PGeSKKvRksGvFBizWBJ3kl_RD9b09jCE=" 
            alt=""
            />
        </div>
    );
}

export default Header;

import React from 'react';
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://i.pinimg.com/originals/4b/27/5c/4b275cb3cf22f45fc245fce708f2ea9e.jpg" 
            alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quisquam illo a ullam praesentium et temporibus. Nisi quasi consectetur eum et minus aliquid, ullam ducimus iste, adipisci quidem odit earum?
            </p>
            </div>

            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
            </div>

            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
            </div>


        </div>
    );
}

export default Sidebar;

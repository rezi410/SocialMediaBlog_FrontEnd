import React from 'react';
import "./SinglePost.css"

const SinglePost = () => {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
            <img src="https://images.complex.com/complex/image/upload/c_fill,f_auto,g_center,w_1200/music-og" 
                 alt="image" 
                 className="singlePostImg" 
            />    
            <h1 className='singlePostTitle'>
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>Rezi</b></span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda earum, animi blanditiis architecto molestiae nobis numquam maxime alias, modi vel repudiandae facilis eos dolores suscipit hic odit! Impedit, eum possimus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda earum, animi blanditiis architecto molestiae nobis numquam maxime alias, modi vel repudiandae facilis eos dolores suscipit hic odit! Impedit, eum possimus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda earum, animi blanditiis architecto molestiae nobis numquam maxime alias, modi vel repudiandae facilis eos dolores suscipit hic odit! Impedit, eum possimus?
            </p>
            </div>
        </div>
    );
}

export default SinglePost;

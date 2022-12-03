import React from 'react';
import "./Post.css"

const Post = () => {
    return (
        <div className='post'>
            <img 
            className='postImg'
            src="https://images.complex.com/complex/image/upload/c_fill,f_auto,g_center,w_1200/music-og" 
            alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amt
                </span>
               
                <span className='postDate'>1 hour ago</span>
            </div>
            <p className='postDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, sint. Expedita, fuga officiis odio dolore magni laudantium. Vel ut saepe dolores earum pariatur! Consequuntur cumque similique magni reiciendis! Suscipit, quam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, sint. Expedita, fuga officiis odio dolore magni laudantium. Vel ut saepe dolores earum pariatur! Consequuntur cumque similique magni reiciendis! Suscipit, quam.
            </p>
        </div>
    );
}

export default Post;

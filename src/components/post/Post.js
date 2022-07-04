import React from 'react';


export default Post;

const Post = ({item}) => {
    return (
        <div>{item.id} - {item.title}</div>
    );
}
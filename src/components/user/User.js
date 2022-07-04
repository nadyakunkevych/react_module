import React from 'react';

export default function User ({item, getPostbyUser}) {
    return (<div>
        <div>{item.id} - {item.name} - {item.username} - {item.city}</div>
        <button onClick={() => getPostbyUser(item.id)}>Get all posts</button>
    </div>);
}
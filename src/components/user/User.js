import React from 'react';

export default function User ({item, getPostbyUser}) {
    return (<div>
        <div> {item.id} . {item.name} - {item.username}, lives in {item.address.city}</div>
        <button onClick={() => getPostbyUser(item.id)}> Get posts</button>
    </div>);
}
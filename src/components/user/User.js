import React from 'react';

const User = ({item, chooseUser}) => {
    return (
        <div>
    <h4> ID: {item.id} </h4>
            <div>  <strong> NAME: </strong> {item.name}</div>
            <div>  <strong> USERNAME:</strong> {item.username} </div>
            <div>  <strong> EMAIL: </strong> {item.email}</div>
            <div>  <strong> ADDRESS: </strong>{item.address.street}</div>
            <div>  <strong> SUITE:</strong> {item.address.suite}</div>
            <div>  <strong> CITY: </strong> {item.address.city}</div>
            <div>  <strong> ZIP CODE: </strong> {item.address.zipcode}</div>
        <br/>
            <div>  <strong> PHONE:</strong> {item.phone}</div>
            <div>  <strong> WEBSITE: </strong> {item.website}</div>

            <button onClick={()=> chooseUser(item)}> details </button>
        </div>
    );
};

export default User;

import {useEffect, useState} from 'react';
import User from "../user/User";

export default function Users() {


    let [users, setUsers] = useState([]);
    let [user, setUser] = useState([]);

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })

            }, []);


    const chooseUser = (item) => {
        setUser(item);
    };


        return (
            <div>
               {user && <div> <h3> {user.id} {user.name} </h3> </div>}
                <h2> Users </h2>
                {
                    users.map(user => <User key={user.id} item={user} chooseUser={chooseUser} />)}

            </div>
        );
    }




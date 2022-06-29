import {useEffect, useState} from "react";
import User from "../user/User";
// import {getUsers} from "../services/user.api.service";


export default function Users () {
    let [users, setUsers] = useState([]);
        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(value => value.json())
                .then(value => {
                    setUsers([...value])
                })

           // getUsers().then(({data}) => setUsers([...data]));
        }, []);


        return (
            <div>
            {

                users.map((value) => <User key={value.id} item={value}/>)
            }


        </div>)

    }
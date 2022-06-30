import {useEffect, useState} from "react";
import {getPosts} from "../services";
import Post from "../post/Post";


export default function Posts (){

    let [posts, setPosts] = useState([]);

    useEffect()) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    }
        getPosts().then({{data}) => setPosts([...data]));

   }, []);

return (

    <div>

        {posts.map(value => <Post item={value} key ={value.id}/>)}

    </div>
)



}


import React, {useState} from 'react';
import Users from "./components/users/Users";
// import Post from "./components/post/Post";
import Posts from "./components/posts/Posts";
import {getUsersPosts} from "./services/user.api.service";

export default function App() {

    let [posts, setPosts] = useState([]);
    const getPostbyUser = (id) => {
        getUsersPosts(id).then(({data}) => setPosts([...data]));
    }

    return (<div>
        <h2> All posts of user:</h2>
        {/*{posts.map(value => <Post key={value.id} item={value}/>)}*/}
        {/*<br/>*/}
        <Users getPostbyUser={getPostbyUser}/>
        <Posts posts={posts}/>

    </div>);
}
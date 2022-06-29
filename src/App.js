import Users from "./components/users/Users";
// import Posts from "./components/posts/Posts";

export default function App () {

    const elevate = (id) => {
        console.log(id)
    }
    // let [comments, setComments] = useState([])
    return (
        <div>
            <Users elevate={elevate}/>
            {/*<Posts/>*/}
            {/*   {*/}
            {/*comments.map(value => <div> value.body  </div> )*/}
            {/*   }*/}
        </div>)
}

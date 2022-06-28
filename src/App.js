import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

export default function App () {

    let [comments, setComments] = useState([])
  return (
    <div>
      <Users/>
        <Posts/>
        {
     comments.map(value => <div> value.body  </div> )
        }
    </div>



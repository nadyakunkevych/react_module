import {Route, Routes} from "react-router-dom";
import AllTodosPage from "./pages/AllTodosPage/AllTodosPage";
import AllAlbumsPage from "./pages/AllAlbumsPage/AllAlbumsPage";
import Layout from "./components/Layout/Layout";
import AllCommentsPage from "./pages/AllCommentsPage/AllCommentsPage";
import PostPage from "./pages/PostPage/PostPage";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'todos'} element={<AllTodosPage/>}/>
                <Route path={'albums'} element={<AllAlbumsPage/>}/>
                <Route path={'comments'} element={<AllCommentsPage/>}/>
                <Route path={'/posts/:postId'} element={<PostPage/>}/>
                <Route/>
            </Route>
        </Routes>
    );
};

export default App;
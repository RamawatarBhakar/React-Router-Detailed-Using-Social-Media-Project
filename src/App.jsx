import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
import PostList from "./component/PostList";
import CreatePost from "./component/CreatePost";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useReducer } from "react";
import PostListProvider from "./Store/store";

function App() {
  const [selectPage, setSelectPage] = useState("home");

  return (
    <PostListProvider>
      <Sidebar page={selectPage} setSelectPage={setSelectPage}></Sidebar>
      <Header></Header>
      <div className="card-wraper">
        {selectPage === "home" ? (
          <PostList></PostList>
        ) : (
          <CreatePost></CreatePost>
        )}
      </div>

      <Footer></Footer>
    </PostListProvider>
  );
}

export default App;

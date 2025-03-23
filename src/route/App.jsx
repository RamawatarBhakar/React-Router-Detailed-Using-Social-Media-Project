import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Footer from "../component/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import PostListProvider from "../Store/store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostListProvider>
      <Sidebar />
      <Header></Header>
      <div className="card-wraper">
        {" "}
        <Outlet />
      </div>

      <Footer></Footer>
    </PostListProvider>
  );
}

export default App;

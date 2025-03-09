import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import PostListPage from "./pages/PostListPage.jsx";
import Write from "./pages/Write.jsx";  
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import MainPost from "./pages/MainPost.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">
        {/*Navabar*/}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/:slug" element={<MainPost />} />
          <Route path="/write" element={<Write />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>

        {/*Navigation*/}
        {/*Intro*/}
        {/*Present Post*/}
        {/*Post List*/}
        {/*Footer*/}
      </div>
    </BrowserRouter>
  );
};

export default App;

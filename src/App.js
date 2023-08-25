import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
import Home from "./Home";
import Feed from "./Feed";
import NewPostFeed from "./NewPostFeed";
import Userguide from "./Userguide";



function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">
      <Home isAuth={isAuth} setIsAuth={setIsAuth}></Home>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<NewPostFeed isAuth={isAuth} setIsAuth={setIsAuth}></NewPostFeed>} />
          <Route path="/newpost" element={<Feed isAuth={isAuth} setIsAuth={setIsAuth}></Feed>}></Route>
          
        </Routes>
      </BrowserRouter>
      <Userguide></Userguide>
    </div>
  );
}

export default App;

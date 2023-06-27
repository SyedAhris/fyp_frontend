import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Pages/Login/Login";
import TopBar from "./Components/TopBar/TopBar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Statistics from "./Pages/Statistics/Statistics";
import Intersection from "./Pages/Intersection/Intersection";
import LiveFeed from "./Pages/Intersection/LiveFeed/LiveFeed";
import IntersectionPage from "./Pages/Intersection/Intersection";
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={'/login'} element={<Login/>}></Route>
            <Route path={'/statistics'} element={<div><Statistics/></div>}></Route>
            <Route path={'/intersection'} element={<div><IntersectionPage/></div>}></Route>
            <Route path={'/live'} element={<div><LiveFeed/></div>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

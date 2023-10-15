import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Policy from "./pages/Policy.jsx";
import Test from "./pages/Test.jsx";
import Login from "./pages/Login.jsx";
import Answer from "./pages/Answer.jsx";

// import Answer.jsx from "./pages/Answer.jsx.jsx";

function Router() {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<Test/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/answer" element={<Answer/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/policy" element={<Policy/>}/>
        </Routes>
    </BrowserRouter>);
}

export default Router;
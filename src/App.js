import React from "react"
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";
import Form from "./components/Form";

function App() {
    return (<>
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="form" element={<Form />} />
        </Routes>

    </>)
}

export default App
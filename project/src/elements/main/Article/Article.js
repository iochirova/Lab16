import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contacts from "./components/Contacts";
import News from "./components/News";
import Error from "./components/Error";

const Article = () =>{
    return(
        <>
            <Routes>
                <Route path='/' element={<News />}/>
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />}/>
                <Route path='*' element={<Error />}/>
            </Routes>
        </>
    )
}

export default Article;

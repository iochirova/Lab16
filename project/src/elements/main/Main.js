import React from "react";
import Article from "./Article/Article";
import Aside from "./Aside/Aside";
import Section from "./Section/Section";
import './Main.css'

const Main = () =>{
    return(
        <div className="main">
            <div className='main__aside'>
                <Aside />
            </div>
            <div className='main__article'>
                <Article />
            </div>
            <div className='main__section'>
                <Section />
            </div>
        </div>
    )
}

export default Main;

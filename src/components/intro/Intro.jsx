import React from 'react'
import "./intro.css"
import me from "../../image/self.png"
import Header from "../header/Header.jsx"
export default function Intro({id}) {
  return (
    <div id={id} className="i">
     
      <div className="i-left">
    <div className="i-left-wrapper">
        <h2 className='i-intro'>Hello,My name is</h2>
        <h1 className="i-name">Priti Jagtap</h1>
        <div className="i-title">
        <div className="i-title-wrapper">
            <div className="i-title-item">Web Developer</div>
            <div className="i-title-item">UI/UX Designer</div>
            <div className="i-title-item">Data Analyst</div>
            <div className="i-title-item">Problem Solver</div>
            <div className="i-title-item">Writer</div>
        </div>
    </div>
    <div className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish,modern websites,web services and online stores.
        </div>


    </div>

      </div>
      <div className="i-right">
      <div className="i-bg">
      <img src={me} alt="" className="i-img"/>
      </div>
     

      </div>
    </div>
  )
}

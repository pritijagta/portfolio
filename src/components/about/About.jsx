import React from 'react'
import "./about.css";
import image from "../../image/about.jpg";
export default function About({id}) {
  return (
    <div id={id} className="a">
      

      <div className="a-left">
        <div className="a-card bg"></div>
      <div className="a-card">
        <img src={image} className="a-img"></img>
      </div>
      </div>
      <div className="a-right">
        <div className="a-des">
          <div>
          <h1 className="a-title">About me</h1>
        <p className="a-me">
        Hi, I'm priti, a passionate and dedicated web developer specializing in front-end technologies and data analysis. With a keen eye for detail and a drive for perfection, I build visually appealing, responsive, and user-friendly websites that deliver exceptional user experiences.
        </p>

        <h1 className="p-back">Professional Background</h1>
        <p className="p-desc">
        I have developed a robust foundation in web development and data analysis. My journey began with mastering HTML and CSS, and I have since advanced my skills in JavaScript and React, enabling me to create dynamic and interactive web applications. My background in data analysis complements my development skills, allowing me to derive actionable insights from complex data sets.
        </p>

          </div>
       

        </div>
       
      </div>
      
    </div>
  )
}

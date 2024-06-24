import React from 'react'
import "./header.css";
export default function Header() {
  return (
    <div>
        <header className="header">
        <nav>
          <ul>
            <li><a href="#intro">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#product_list">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li className="linkedin"><a className="linkedin" href="https://www.linkedin.com/in/priti-jagtap-51310b24a/">Linkedin</a></li>
            <li className="github"><a className="linkedin" href="https://github.com/pritijagta?tab=repositories">GitHub</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

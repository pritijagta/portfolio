import React from 'react'
import "./productList.css"
import Product from "../product/Product.jsx";
import task from "../../image/task_creation.jpg"
import crud from "../../image/CRUD.jpeg";
import chat from "../../image/chat.jpg";
import EDA from "../../image/EDA.jpg";
import dashboard from "../../image/Dashboard.jpg";
import movie from "../../image/movie.jpg";


export default function ProductList({id}) {
  return (
   
      <div id={id} className="pl">
        <div className="pl-texts">
            <h1 className="pl-title"> My Projects </h1>
            <div className="pl-desc">
                
            </div>
        </div>
        <div className="pl-list">
        <Product img={movie} title="Movie Searching" link={`https://pritijagta.github.io/movie_search/`} />
        <Product img={task} title="Task Creation" link={`https://github.com/pritijagta/task_creation`}/>
        <Product img={crud} title="CRUD Operation" link={`https://github.com/pritijagta/crud_operations`}/>
        <Product img={chat} title="Image Analytics" link={`https://github.com/pritijagta/Generative_ai`}/>
        <Product img={EDA} title="VisaDataset EDA" link={`https://github.com/pritijagta/EDA`}/>
        <Product img={dashboard} title="VisaDataset Dashboard" link={`https://github.com/pritijagta/Visa_Dashboard`}/>
        </div>

      </div>

  )
}

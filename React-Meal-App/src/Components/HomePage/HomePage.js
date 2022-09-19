import React,{useState,useCallback,useContext} from 'react'
import "./HomePage.scss"
import { myContext } from '../Context/Context';

const HomePage = () => {

  const[searchTerm,setSearchTerm] = useState("");
  const {fetchHomePageMeals,meals } = useContext(myContext)

 const fetchMealsHandler =  useCallback(()=>{
    fetchHomePageMeals (searchTerm)

  },[searchTerm,fetchHomePageMeals]);


   




  return (
    <div className ="home">
      <div className='home-search'>
      
      <input type="text" placeholder='Type a meal name...' value={searchTerm}onChange={(e)=>setSearchTerm(e.target.value)}/>
      <button onClick={fetchMealsHandler}>Search Meal</button>

      </div>

      <div className="home-meals">
             {
              meals? (
                meals.map((meal)=><div className="home-grid" key={meal.idMeal}>
                 <img src = {meal.strMealThumb}alt="#" />
                 <h4>{meal.strMeal}</h4>
                </div>)
              ): (
                <h2>No Meals Found Try Another Word...</h2>
              )
             } 
      </div>
   
    </div>
  )
}

export default HomePage
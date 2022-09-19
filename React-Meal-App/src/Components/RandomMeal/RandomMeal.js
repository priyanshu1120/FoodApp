import React,{useEffect,useContext} from 'react'
import { myContext } from '../Context/Context'
import "./RandomMeal.scss"

const RandomMeal = () => {

  const {fetchRandomMeals,randomMeals} = useContext(myContext)

useEffect(()=>{
  fetchRandomMeals();
},[])


  return (
    <div className='random'>
{
  randomMeals.map((meal)=>(
    <div key={meal.idMeal} className= "random-grid">
        <div  className= "random-grid-controls" >
               <img src={meal.strMealThumb} alt="#"/>
               <button onClick={fetchRandomMeals}>Generate Another Meals</button>
        </div>

        <div className= "random-grid-instructions">
          <h4>Instruction</h4>
          <p>{meal.strInstructions}</p>
          </div>
    </div>
  ))
}

    </div>
  )
}

export default RandomMeal
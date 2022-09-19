import React,{useEffect,useContext} from 'react'
import { myContext } from '../Context/Context'
import "./Categories.scss"

const Categories = () => {

  const {fetchCategories,categories} = useContext(myContext)
  useEffect(()=>{
    fetchCategories();
  },[fetchCategories])



  return (
    <div className='categories'>

      {categories.map((item)=>(
      
      <div className = "heloo" key={item.idCategory}>
          
        <img src= {item.strCategoryThumb} alt = "#" />
        <h4>{item.strCategory}</h4>

      </div> ))}

    </div>
  )
}

export default Categories
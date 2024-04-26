import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadScreen from '../loadScreen/LoadScreen'

const Ingredients = () => {

       const[ingredient,setIngredient] = useState([])

       async function getIngredient(){
              const result = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
              setIngredient(result.data.meals)
       }

       useEffect(()=>{
              getIngredient()
       },[])

       function SplitDescription(temp){
              // console.log(temp);
              if (typeof temp !== 'string' || temp.length === 0) {
                     return ''; // Return an empty string if temp is not a string or empty
              }
              return temp.substring(0, 72);       
              }

  return (
    <>
      {ingredient.length>0 ? 
       <div className='py-5'>
       <div className="container">
              <div className="row">
                     

                     <div className='row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-4'>
                            {ingredient.map((ingredient, index) => (
                                   
                                   <div className='text-white fs-4 text-center'> 
                                          <i className='fa-solid fa-drumstick-bite '></i>
                                          <p>{ingredient.strIngredient}</p>
                                          <p>{SplitDescription(ingredient.strDescription)}</p>
                                   </div>
                            ))}
                     </div>
              </div>
       </div>
</div>
       :<LoadScreen/>}
    </>
  )
}

export default Ingredients

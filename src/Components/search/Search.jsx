import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MealCard from '../meal-card/MealCard'

const Search = () => {

       const [inputValue, setInputValue] = useState()
       const [inputValue2, setInputValue2] = useState()
       const [meals,SetMeals] = useState([])
       const kind= "search"


       function handleChange(event) {
              const { value } = event.target;
              setInputValue('')
              setInputValue2('')
              setInputValue(value.charAt(0)); 
              getByFristLetter(value.charAt(0))
       }

       function handleChange2(event) {
              const { value } = event.target;
              setInputValue('')
              setInputValue2('')
              setInputValue2(value);
              getByName(value)
       }

       async function getByFristLetter(letter){
              try{
                     const result = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
                     SetMeals([])
                     SetMeals(result.data.meals)
                     // console.log(letter);
                     // console.log(meals);
              }
              catch (e) {
                     console.log("Error: ", e);
              }
       }

       async function getByName(name){
              try{
                     const result = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
                     SetMeals([])
                     SetMeals(result.data.meals)
                     // console.log(letter);
                     // console.log(meals);
              }
              catch (e) {
                     console.log("Error: ", e);
              }
       }

       useEffect(() => {
              console.log(meals);
       }, [meals]);
            

       

  return (
    <>
      <div className='py-5'>
       <div className="container vstack gap-4">
              <div className="row row-cols-1 row-cols-lg-2 g-4">
                     <div>
                            <input  value={inputValue} onChange={handleChange}  type="text" className='w-100 form-control  bg-body-secondary' placeholder='Search by First letter' />
                     </div> 
                     <div>
                            <input value={inputValue2} onChange={handleChange2} type="text" className='w-100 form-control  bg-body-secondary' placeholder='Search by Name' />
                     </div> 
              </div>
              <div>
                     {meals? 
                                   <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4 ">
                                          <>
                                                 {meals.map((m,index)=>(
                                                        <MealCard key={index} data={m} kind={kind}/>
                                                        // <h1>{m.strArea}</h1>
                                                 ))}
                                          </>
                                   
                     </div>:<div></div>}
              </div>
       </div>
      </div>
    </>
  )
}

export default Search

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoadScreen from './../loadScreen/LoadScreen';

const ProDetails = () => {

       const[details,SetDetailes] = useState(null);
       const {id} = useParams()
       async function getProductDetails(){

              
              const result = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
              SetDetailes(result.data.meals[0])
       }

       useEffect(()=>{
              getProductDetails()
       },[])

  return (
    <>
       {details?<div className='py-5'>
              <div className="container">
                     
                     <div className="row text-white py-5">
                            <div className='col-sm-12 col-md-4 col-lg-3'>
                                   <div className='vstack gap-3 fst-italic'>
                                          <img src={details.strMealThumb} className='w-100 rounded-4' alt="details"  />
                                          <h1 className='h3'> {details.strMeal} </h1>
                                   </div>
                            </div>
                            <div className='col-sm-12 col-md-8 col-lg-9'>
                                   <div className='vstack gap-3'>
                                          <h2 className='fw-bold'>Instructions</h2>
                                          <p className='lead'>{details.strInstructions}</p>
                                          <h2>Area : {details.strArea}</h2>
                                          <h2>Category : {details.strCategory}</h2>
                                          <h2>Recipes :</h2>
                                          <div className='d-flex justify-content-between flex-wrap  gap-2'>
                                          {Object.keys(details)
                                                 .filter(key => key.startsWith('strIngredient') && details[key])
                                                 .map((key, index) => (
                                                 <div className='bg-success fs-5  p-1 rounded-2 d-flex justify-content-center align-items-center' key={index}><span>{details[key]}</span></div>
                                          ))}
                                          </div>
                                          <h2>Tags : {details.strTags}</h2>
                                          <div className='hstack gap-3'>
                                                 <a className='btn btn-success' href={details.strSource}> Sourse</a> 
                                                 <a className='btn btn-danger' href={details.strYoutube}> YouTube</a>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       </div> : <LoadScreen/>}
    </>
  )
}

export default ProDetails

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LoadScreen from '../loadScreen/LoadScreen';
import { Link } from 'react-router-dom';

const Area = () => {

       const[areaMeal,setAreaMeal] = useState([])

       async function getAreaMeal(){
              try{
                     const result = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
                     setAreaMeal(result.data.meals)
                     // console.log(result.data.meals); 
              }
              catch(e)
              {
                     console.log("Error : " , e);
              }
       }

       useEffect(()=>{
              getAreaMeal()
       },[])

  return (
    <>
      {areaMeal.length>0 ? <div className='py-5'>
                            <div className="container">
                                   <div className="row">
                                          <div>
                                                 <h1 className='text-white text-center'>
                                                        All Area
                                                 </h1>
                                          </div>

                                          <div className='row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-4'>
                                                 {areaMeal.map((area, index) => (
                                                        <Link to={`/mealarea/${area.strArea}`} className='text-decoration-none'>
                                                               <div className='text-white fs-1 text-center'> 
                                                               <i className='fa-solid fa-house-laptop '></i>
                                                               <p>{area.strArea}</p>
                                                               </div>
                                                        </Link>
                                                 ))}
                                          </div>
                                   </div>
                            </div>
                     </div>:<LoadScreen/>}
    </>
  )
}

export default Area

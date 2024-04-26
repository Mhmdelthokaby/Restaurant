import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoadScreen from '../loadScreen/LoadScreen';
import MealCard from '../meal-card/MealCard';

const MealArea = () => {

       const {name} = useParams();
       const[allProduct,SetallProduct] = useState([])
       const kind = "area"

       async function GetAllProduct(){
              try{
                     
                     const result = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`)
                     SetallProduct(result.data.meals)
                     console.log(allProduct);
              }
              catch(e){
                     console.log("Error : " + e);
              }
       }

       useEffect(()=>{
              GetAllProduct()
       },[])

       useEffect(()=>{console.log(allProduct)},[allProduct])

  return (
    <>
      {allProduct.length>0? <div className='py-5'>
                     <div className="container">
                            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-4">
                                   {allProduct.map((m,index)=>(
                                          <MealCard key={index} data={m} kind={kind} />
                                          
                                   ))}
                            </div>
                     </div>
              </div> : <LoadScreen/>}
    </>
  )
}

export default MealArea

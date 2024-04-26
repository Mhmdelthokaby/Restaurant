import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MealCard from '../meal-card/MealCard';
import LoadScreen from './../loadScreen/LoadScreen';

const Home = () => {


       const[randomProduct, setRandomProduct] = useState([]);
       const kind= "home"
       async function getRondomProduct() {
              try {
                let arr = [];
                for (let i = 0; i < 20; i++) {
                  const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
                  arr.push(data);
                }
                setRandomProduct(arr);
              } catch (e) {
                console.log("Error: ", e);
              }
            }
          
            useEffect(() => {
              getRondomProduct();
            }, []);


  return (
    <>

      {randomProduct.length>0 ? <div className=' py-5'>
        <div className='container vstack gap-3'>
          <div>
            <h1 className='text-white text-center'>
              Home
            </h1>
          </div>
          <div className='row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-4'>
            {randomProduct.map((product, index) => (
              <MealCard kind={kind}  key={index} data={product}  />
              
            ))}
          </div>
        </div>
      </div> :<LoadScreen/>}
      

      
    </>
  )
}

export default Home

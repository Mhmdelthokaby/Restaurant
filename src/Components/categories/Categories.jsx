import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategoriesCard from '../cat-card/CategoriesCard';
import LoadScreen from '../loadScreen/LoadScreen';

const Categories = () => {
       const [categories, setCategories] = useState([]);

       async function getCategories() {
              try {
                     const result = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
                     setCategories(result.data.categories);

                     console.log(result.data.categories[0]);
              } catch (e) {
                     console.log("Error: ", e);
              }
       }

       useEffect(() => {
              getCategories();
       }, []);

       return (
              <>
                     {categories.length>0 ? <div className='py-5'>
                            <div className="container">
                                   <div className="row">
                                          <div>
                                                 <h1 className='text-white text-center'>
                                                        Categories
                                                 </h1>
                                          </div>

                                          <div className='row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-4'>
                                                 {categories.map((category, index) => (
                                                        <CategoriesCard key={index} data={category}/>
                                                 ))}
                                          </div>
                                   </div>
                            </div>
                     </div>:<LoadScreen/>}
              </>
       );
};

export default Categories;

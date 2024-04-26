import React, { useEffect, useState } from 'react';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import MealCard from './Components/meal-card/MealCard';
import axios from 'axios';
import Home from './Components/home/Home';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import NotFound from './Components/notFound/NotFound';
import Layout from './Components/layout/Layout';
import Categories from './Components/categories/Categories';
import Area from './Components/area/Area';
import Ingredients from './Components/ingredients/Ingredients';
import ProDetails from './Components/proDetails/ProDetails';
import Search from './Components/search/Search';
import MealCategory from './Components/mealCategory/MealCategory';
import MealArea from './Components/mealArea/MealArea';

const router = createBrowserRouter( [
  {path: '' , element: <Layout/>,children:[
    {path: '',element:<Home/>},
    {path: 'home',element:<Home/>},
    {path: 'prodetails/:id',element:<ProDetails/>  },
    {path: 'categories',element:<Categories/>},
    {path: 'mealcategory/:name',element:<MealCategory/>},
    {path: 'area',element:<Area/>},
    {path: 'mealarea/:name',element:<MealArea/>},
    {path: 'ingredients',element:<Ingredients/>},
    {path: 'search',element:<Search/>},
    {path: '*' , element: <NotFound/>}
  ]},
  {path: '*' , element: <NotFound/>}
] )


const App = () => {

  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;

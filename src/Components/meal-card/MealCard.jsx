import React from "react";
import mealcardStyle from "../meal-card/mealCard.module.css";
import { Link } from "react-router-dom";

const MealCard = (props) => {

  let kind = props.kind

  let meal
  if(kind=="home"){
    meal = props.data.meals[0]

  }
  else{
    meal =props.data
  }
  return (
    <>
      <Link to={`/prodetails/${meal.idMeal}`}>
        <div className="position-relative overflow-hidden rounded-4">
          <div className={mealcardStyle.mealbox}>
            <img src={meal.strMealThumb} className="w-100 " alt="mh" />

            <div className="">
              <div className={mealcardStyle.layerUp }>
                <div className="p-3">
                  <h1 className="h5">{meal.strMeal}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MealCard;

import React from 'react'
import mealcardStyle from '../meal-card/mealCard.module.css'
import { Link } from 'react-router-dom'

const CategoriesCard = (props) => {
       let cat = props.data
       let temp =cat.strCategoryDescription
       let disc = temp.substring(0, 70);
  return (
    <> 
      <Link to={`/mealcategory/${cat.strCategory}`} >
      <div className="position-relative overflow-hidden rounded-4">
          <div className={mealcardStyle.mealbox}>
            <img src={cat.strCategoryThumb} className="w-100 " alt="mh" />

            <div className="">
              <div className={mealcardStyle.layerUp }>
                <div className="p-3 text-center">
                  <h1 className="h5">{cat.strCategory}</h1>
                  <p>{disc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default CategoriesCard

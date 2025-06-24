import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);


  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return; //validamos que no exista
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory onNewCategory={(event) =>onAddCategory(event)} /> 

        {/* Listado de gifs */}

        <div className="mt-3">
          {
            categories.map(category => {
                return <GifGrid key={category} category={category}  />  
              })
          }
        </div>


  

        {/* Gif item */}
    </>

  )
}

import { useState } from "react"
import { AddCategory, GifGrid } from "./components"; //usando archivo de barril index.ts



export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball']);


  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return; //validamos que no exista
    setCategories([newCategory, ...categories]);
  }

  const onClearCategories = () => {
    setCategories([]);
  }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory onNewCategory={(event) =>onAddCategory(event)} onClearCategories={onClearCategories} /> 

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

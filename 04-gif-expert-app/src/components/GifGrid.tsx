//import { useState, useEffect } from "react"
//import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs"; //custom hook
import { Loading } from "./Loading";


interface GifGridProps {
  category: string;
}




export const GifGrid = ({ category }: GifGridProps) => {

  const {images, isLoading} = useFetchGifs(category);

     /*
    const [images, setImages] = useState<any[]>([]);
     const getImages = async() => {
        const imgs = await getGifs(category);
        setImages(imgs);
    }


    useEffect(() => {
        getImages();
    }, []);
  */

  return (
    <div className="row">
        <h3>{category}</h3>
        { isLoading && <Loading /> }
        {    
            images.map(image => {
                return (
                    <div className="col-4 mt-3" key={image.id}>
                       <GifItem {...image} /> {/*spread operator para pasar todas las propiedades */}
                    </div>
                )
            })
        }
    </div>
  )
}

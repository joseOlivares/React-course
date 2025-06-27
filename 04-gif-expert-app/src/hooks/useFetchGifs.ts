import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category:string) => {
    const [images, setImages] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

     const getImages = async() => {
        const imgs = await getGifs(category); //llamada a la api
        setImages(imgs);
        setIsLoading(false);
    }


    useEffect(() => {
        getImages();
    }, []);

    

    return {
        images,  //podria ser images: images pero como la propiedad es igual se puede omitir
        isLoading: isLoading
    }

}

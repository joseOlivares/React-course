
import { tenorApiKey } from "../apikey/tenorApiKey";

interface GifGridProps {
  category: string;
}

export const GifGrid = ({ category }: GifGridProps) => {


const getGifs = async() => {
  try {
    const url = `https://tenor.googleapis.com/v2/search?q=${category}&key=${tenorApiKey}&limit=10`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data); // log the response data to the console
    const gifs = data.results.map((img: any) => {
      return {
        id: img.id,
        title: img.title,
        url: img.media_formats.gif.url,
        description: img.content_description
      }
    })
    console.log(gifs);
  } catch (error) {
    console.error(error); // log any errors to the console
  }
}

    getGifs();

  return (
    <div className="row">
        <h3>{category}</h3>
    </div>
  )
}

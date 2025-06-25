import { tenorApiKey } from "../apikey/tenorApiKey";

export const getGifs = async( category: string) => {
  try {
    const url = `https://tenor.googleapis.com/v2/search?q=${category}&key=${tenorApiKey}&limit=10`;
    const resp = await fetch(url);
    const data = await resp.json();
    //console.log(data); // log the response data to the console
    const gifs = data.results.map((img: any) => {
      return {
        id: img.id,
        title: img.title,
        url: img.media_formats.gif.url,
        description: img.content_description,
        tag: img?.tags[0]
      }
    })
    console.log(gifs);
     return gifs;
  } catch (error) {
    console.error(error); // log any errors to the console
  }

  return [];
}
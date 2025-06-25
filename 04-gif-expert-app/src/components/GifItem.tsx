
interface GifItemProps {
    id: string;
    title?: string;
    url: string;
    description: string;
    tag: string;
}
  


export const GifItem = (image: GifItemProps) => {
  return (
    <div className="card">
      <img src={image.url} alt={image.tag} className="card-image object-fit-scale" />
      <p className="card-text text-center">{image.tag}</p>
    </div>

  )
}

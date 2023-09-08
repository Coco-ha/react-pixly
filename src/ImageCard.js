import "./ImageCard.css";

/** Renders a single image
 *
 * Props:
 *  image: a single image object
 *  {date,file_name,id,make,model,pixel_x_dimension,pixel_y_dimension, url}
 *
 * State: None
 *
 *ImageDetails -> ImageCard
 */
function ImageCard({ image }) {
  console.log("image in imageCARDDDD>>>", image)

  return (
    <div className="ImageCard">
      <div className="ImageCard-header">

        <div className="ImageCard-titleBorder">
          <div className="ImageCard-title">
            {image.file_name}
          </div>
        </div>

        <button>Greyscale</button>

      </div>
      <img src={image.url} alt={image.name} />
    </div>
  );
}

export default ImageCard;
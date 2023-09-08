import ImageCard from "./ImageCard";
import { Link } from "react-router-dom";
import "./ImagesList.css";

/** Imagelist component that is a list that renders individual images
 *
 * Props:
 *  images: a list of images
 *
 * States: None
 *
 * Home -> ImageList -> ImageCard
 */
function ImagesList({ images }) {
  console.log("Images list rendered with images>>>", images);

  return (
    <div className="ImagesList">
      {images.map(image => {
        return (
          <div className="ImagesList-item">
            <Link to={`/images/${image.id}`} key={image.id}>
              <ImageCard image={image} key={image.id} />
            </Link>
          </div>
        )
      })}
    </div>
  );
}

export default ImagesList;
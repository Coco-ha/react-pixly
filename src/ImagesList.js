import ImageCard from "./ImageCard";
import { Link } from "react-router-dom";

function ImagesList({ images }) {
  console.log("Images list rendered with images>>>", images);

  return (
    <div className="ImagesList">
      {images.map(image => {
        return (
          <Link to={`/images/${image.id}`}>
            <ImageCard image={image} />;
          </Link>
        );
      })}
    </div>
  );
}

export default ImagesList;
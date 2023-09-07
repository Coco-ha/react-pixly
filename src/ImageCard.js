import Image from "./Image";
import "./ImageCard.css";

function ImageCard({ image }) {

  return (
    <div className="ImageCard">
      <h4>{image.file_name}</h4>
      <Image image={image} />
    </div>
  );
}

export default ImageCard;
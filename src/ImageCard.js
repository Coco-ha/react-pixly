import { useParams } from "react-router-dom";
import Image from "./Image";
import { getImageById } from "./api";
import "./ImageCard.css";

function ImageCard({ images }) {

  console.log("Rendering image card. Images>>>>", images);
  const { id } = useParams();
  console.log("id>>>>>>", id);
  const image = images.find(image => image.id === id);
  console.log("image>>>>", image);

  return (
    <div className="ImageCard">
      <Image image={image} />
    </div>
  );
}

export default ImageCard;
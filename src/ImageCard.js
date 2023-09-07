import { useParams } from "react-router-dom";
import Image from "./Image";
import { getImageById } from "./api";

function ImageCard({images}) {

  console.log("Rendering image card. Images>>>>", images)
  const [id] = useParams;

  const image = images.filter(image=> id===image.id)[0]

  return (
    <div>
      <Image image={image} />
    </div>
  );
}

export default ImageCard;
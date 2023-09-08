import Image from "./Image";
import "./ImageCard.css";
import { convertToGrayscale } from "./image_helpers";
import { useState } from "react";
import Jimp from "jimp";

function ImageCard({ image }) {
  console.log("image in imageCARDDDD>>>", image)
  // const [jimpImage,setJimpImage] = useState(image.url)


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
      <img src={image.url} />
    </div>
  );
}

export default ImageCard;
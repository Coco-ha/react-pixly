import ImageCard from "./ImageCard";
import { useParams } from "react-router-dom";
import { getImageById } from "./api";

/** Pulls an image from the list of images based on the url param and renders
 * an ImageCard containing that image
 */

function ImageDetails({images}){

  console.log("Rendering imageDetails. Images>>>>", images);
  const { id } = useParams();
  console.log("id>>>>>>", id);
  const image = images.find(image => image.id === id);
  console.log("image>>>>", image);

  return (
    <div className="ImageDetails">
      <ImageCard image={image}/>
    </div>
  )
}

export default ImageDetails
import { useState, useEffect } from 'react';
import { getMetaData } from './image_helpers';
import { uploadImage } from './api';
import { useNavigate } from 'react-router-dom';
import ImagePreview from './ImagePreview';

/** Responsible for holding data about an image
 * Renders a preview component
 *
 * Props:
 *  -jpg : JPG file
 *  -updateImagesState: function that updates the image state
 *
 * State:
 * isLoading: boolean to indicate if the image is done loading
 * fileData: metaData from the image
 *    {file, date, file_name ,make,model, pixel_x_dimension, pixel_y_dimension}
 *
 *
 * RouteList -> EditImageForm
 */
function EditImageForm({ jpg, updateImagesState }) {

  const [isLoading, setIsLoading] = useState(true);
  const [fileData, setFileData] = useState({});
  // const [imageElement, setImageElement] = useState({});
  const navigate = useNavigate();

  console.log("EditImageForm fileData: ", fileData)



  useEffect(function listenForImageLoad() {

    const img = document.querySelector("img");
    if (!img) throw new Error("no image element found");

    console.log("image element:", img);
    img.onload= () => {
        if (isLoading) {
          function updateFileData(data) {
            setFileData(data)
          };

          getMetaData(img, updateFileData)
          setIsLoading(false)
      };

    }

  }, [isLoading]);

  /** Makes an api request for uploading an image */
  async function uploadNewImage(evt) {
    evt.preventDefault();
    console.log("data sent to server", fileData);

    const data = await uploadImage(jpg, fileData);
    console.log("data from server", data);
    updateImagesState(data);

    navigate(`/images/${data.id}`);
  }

  const newImagePreview = (
    <ImagePreview
      file={jpg}
      handleSave={uploadNewImage}
    />
  );

  return (
    newImagePreview
  );

}

export default EditImageForm;
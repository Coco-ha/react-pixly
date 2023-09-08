import { useState, useEffect } from 'react';
import { getMetaData } from './image_helpers';
import { uploadImage } from './api';
import { useNavigate, Navigate } from 'react-router-dom';
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
 * fileData: The image and its metaData (where available)
 *    {file, date, file_name ,make,model, pixel_x_dimension, pixel_y_dimension}
 *
 * RouteList -> EditImageForm
 */
function EditImageForm({ jpg, updateImagesState }) {

  console.log("jpg", jpg)

  const [isLoading, setIsLoading] = useState(true);
  const [fileData, setFileData] = useState({});
  const navigate = useNavigate();

  console.log("EditImageForm fileData: ", fileData)


  /** Updates the fileData state by pulling metadata from the image on load
   *
   */
  useEffect(function listenForImageLoad() {

    const img = document.querySelector("img");
    if (!img) {
      navigate("/");
      return;
    }

    console.log("image element:", img);
    img.onload= () => {
        if (isLoading) { //Only the first time. Avoid infinite loops.
          function updateFileData(data) {
            setFileData(data)
          };

          getMetaData(img, updateFileData) //pull data and update state
          setIsLoading(false)
      };
    }
  }, [isLoading]);

  /** Makes an api request for uploading an image then redirects to image
   * details for that image.
   *
   *  Called when user clicks "Save"
  */
  async function uploadNewImage(evt) {
    evt.preventDefault();
    console.log("data sent to server", fileData);

    const data = await uploadImage(jpg, fileData);
    console.log("data from server", data);
    updateImagesState(data);

    navigate(`/images/${data.id}`);
  }

  //HTML for a new Image
  const newImagePreview = (
    jpg ?
      <ImagePreview
        file={jpg}
        handleSave={uploadNewImage}
      />
    :
      <Navigate to="/"/>
  );

  return (
    newImagePreview
  );

}

export default EditImageForm;
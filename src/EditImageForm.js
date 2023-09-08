import { useState, useEffect } from 'react';
import { getMetaData } from './image_helpers';
import { uploadImage } from './api';
import { useNavigate } from 'react-router-dom';
import ImagePreview from './ImagePreview';

/** Responsible for holding data about an image
 * Renders a preview component
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
        if (isLoading) { //TODO: why does this work here?
          function updateFileData(data) {
            setFileData(data)
          };
          // debugger;

          getMetaData(img, updateFileData)
          setIsLoading(false)
      };

    }

    // setImageElement(img);

  }, [isLoading]);

  // useEffect(function pullMetaDataOnLoad() {
  //   if (!isLoading) {

  //     console.log("useEffect pulling metadata. isLoading:", isLoading);

  //     const img = document.querySelector("img");
  //     if (!img) throw new Error("no image element found");

  //     function updateFileData(data) {
  //       setFileData(data)
  //     };
  //     getMetaData(img, updateFileData);
  //   }

  // }, [isLoading]);



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
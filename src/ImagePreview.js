import { useState, useEffect } from 'react';
import {getMetaData} from './image_helpers';
import { uploadImage } from './api';
import "./ImagePreview.css";



/** Previews an image and renders a button to save data and/or changes
 *
 * Props:
 *  jpg - image file to edit
 *  handleSave - callback for saving changes in state & db
 *
 * State: None
 *
 * EditImageForm -> ImagePreview
 */

function ImagePreview({ file, handleSave }) {

  console.log("rendering Image Preview")
  console.log("preview file:",file)
  // const [isLoading, setIsLoading] = useState(true);


  // function handleLoad(evt) {
  //   if (isLoading) {
  //     const dataFromImage = getMetaData(evt.target, getMetaData);
  //     setIsLoading(false);
  //   }
  // }

  return (
    <div className='ImagePreview'>
      <div className="ImagePreview-header">

        <div className="ImagePreview-titleBorder">
          <div className="ImagePreview-title">
            {file.name}
          </div>
        </div>
      </div>

      <img
        src={URL.createObjectURL(file)}
        alt={file.name}
        className="ImagePreview-image"
        onLoad={()=>console.log("loaded")}
        />
      <form onSubmit={handleSave}>
        <button type="submit">Save</button>
      </form>
    </div>
  );

}


export default ImagePreview;
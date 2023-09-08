import { useState, useEffect } from 'react';
import {getMetaData} from './image_helpers';
import { uploadImage } from './api';
import "./ImagePreview.css";

/** Previews changes to an image and renders a form for adding/updating a record
 *
 * Props:
 *  Mode - "add" or "edit"
 */
function ImagePreview({ imageFile, handleSave, mode }) {


  /** ADD mode
   *
   *  load an image
   *    pull metadata from that image on load
   *    display that image on load
   *  render image preview
   */

  // const [isLoading, setIsLoading] = useState(true);


  // function handleLoad(evt) {
  //   if (isLoading) {
  //     const dataFromImage = getMetaData(evt.target, updateMetadata);
  //     setIsLoading(false);
  //   }
  // }

  return (
    <div className='EditImageForm'>
      {/* <img
        src={URL.createObjectURL(file)}
        alt={file.name}
        className="EditImageForm-image"
        onLoad={handleLoad} />
      <form onSubmit={save}>
        <button type="submit">Save</button>
      </form> */}
    </div>
  );



}


export default ImagePreview;
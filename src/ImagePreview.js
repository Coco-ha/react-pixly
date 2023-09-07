import { useState, useEffect } from 'react';
import getMetaData from './image_helpers';
import { uploadImage } from './api';
import "./ImagePreview.css";


function ImagePreview({ file, updateMetadata, save }) {//need this prop?

  const [isLoading, setIsLoading] = useState(true);

  /** Pulls metadata from an image on load and calls the updateMetadata
   * callback using the pulled data.
   */
  function handleLoad(evt) {
    if (isLoading) {
      const dataFromImage = getMetaData(evt.target, updateMetadata);
      setIsLoading(false);
    }
  }

  return (
    <div className='EditImageForm'>
      <img
        src={URL.createObjectURL(file)}
        alt={file.name}
        className="EditImageForm-image"
        onLoad={handleLoad} />
      <form onSubmit={save}>
        <button type="submit">Save</button>
      </form>
    </div>
  );



}


export default ImagePreview;
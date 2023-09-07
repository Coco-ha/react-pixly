import { useState } from 'react';
import getMetaData from './image';
import { uploadImage } from './api';
import ImagePreview from './ImagePreview';

/**  Renders a form that allows a user to add an image to pixly:
 *
 * STATE:
 *  fileData: the user file and associated metadata
 *            {file, Date, PixelXDimension,PixelYDimension, Make, Model}
 *  imageInput: form control for the file input
 *  mode: one of "select" or "preview"
 *
 * PROPS:
 *  addImage: callback function for updating app state
*/
function AddImageForm({addImage}) {

  const [fileData, setFileData] = useState({});
  const [imageInput, setImageInput] = useState("");
  const [mode, setMode] = useState("select");

  console.log("rendering addImageForm with:",fileData);

  /** Handles form controls */
  function handleChange(evt) {
    setImageInput(evt.target.value);
    setFileData(() => {
      return { ...fileData, file: evt.target.files[0] };
    });
  }

  /** Accesses the file from the form input and updates fileData state.
   * Advances to preview mode.
  */
  async function goPreviewMode(evt) {
    evt.preventDefault()
    setMode("preview")
  }

  /** Updates the fileData state with metadata from an image.  Used as
   * a callback
   */
  function updateMetadata(data){
    console.log("passed data to updateMetadata", data)
    setFileData(() => {
      return {
        ...fileData,
        ...data,
      };
    })
  }

  /** Makes an api request for uploading an image */
  async function handleUpload(evt) {
    evt.preventDefault();
    console.log("running handle upload")
    console.log("fileDATA>>>>", fileData)
    await uploadImage(fileData)
    //TODO: redirect somewhere
  }


  return (
    <div className='AddImageForm'>
    {mode === "select"
      ?
        <form onSubmit={goPreviewMode}>
          <label htmlFor='image'> File Input </label>
          <input
            value={imageInput}
            type="file"
            name="image"
            className="AddImageForm-imageInput"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      :
        <ImagePreview
          updateMetadata={updateMetadata}
          file={fileData.file}
          save={handleUpload}/>
      }
      </div>
  );
}

export default AddImageForm;

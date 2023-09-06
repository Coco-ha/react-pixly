import { useState } from 'react';
import getMetaData from './image';
import { uploadImage } from './api';


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
  async function getMetaDataAndPreview(evt) {
    evt.preventDefault()

    const input = document.querySelector(".AddImageForm-imageInput");
    const metadata = getMetaData(input);

    setFileData(() => {
      return {
        ...fileData,
        ...metadata,
      };
    });

    setMode("preview")
  }


  /** Makes an api request for uploading an image */
  async function handleUpload(evt) {
    evt.preventDefault();
    console.log("running handle upload")
    await uploadImage(fileData)
    //TODO: redirect somewhere
  }


  return (
    <div className='AddImageForm'>
    {mode === "select"
      ?
        <form onSubmit={getMetaDataAndPreview}>
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
        <div>
          <img
            src={URL.createObjectURL(fileData.file)}
            alt={fileData.file.name}
            className="EditImageForm-image" />
          <form onSubmit={handleUpload}>
            <button type="submit">Save</button>
          </form>
        </div>
      }
      </div>
  );
}

export default AddImageForm;

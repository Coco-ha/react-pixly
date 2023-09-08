import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./AddImageForm.css";

/**  Renders a form that allows a user to add an image to pixly:
 *
 * STATE:
 *  fileData: the user file and associated metadata
 *            {file, Date, PixelXDimension,PixelYDimension, Make, Model}
 *  imageInput: form control for the file input
 *  mode: one of "select", "preview" or "complete"
 *
 * PROPS:
 *  addImage: callback function for updating app state
*/
function NewImageForm({ updateJpg, updateImagesState }) {

  const [file, setFile] = useState();
  const [imageInput, setImageInput] = useState("");
  const navigate = useNavigate();

  console.log("rendering newImageForm with:", file);

  /** Handles form controls */
  function handleChange(evt) {
    const fileName = evt.target.files[0].name;

    //check extension
    const splitFileName = fileName.toLowerCase().split(".");
    const extension = splitFileName[splitFileName.length - 1];

    if (extension !== "jpg") {
      alert("This is not a JPG");
      setImageInput("");
    }

    setImageInput(evt.target.value);
    setFile(() => evt.target.files[0]);
  }


  /** Accesses the file from the form input and updates fileData state.
   * Advances to preview mode.
  */
  async function handleSubmit(evt) {
    evt.preventDefault();
    updateJpg(file)
    navigate("/new/preview")
  }



  return (
    <div className='AddImageForm'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='image'></label>
        <input
          value={imageInput}
          type="file"
          name="image"
          className="AddImageForm-imageInput"
          onChange={handleChange}
          />
        <button className="AddImageForm-button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewImageForm;

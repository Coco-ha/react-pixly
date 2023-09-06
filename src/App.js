import { useState } from 'react';
import axios from "axios";
import getMetaData from './image';

const BASE_API_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5001";


function App() {

  const [fileData, setFileData] = useState({});
  const [imageInput, setImageInput] = useState("");
  const [mode, setMode] = useState("get image");

  function handleChange(evt) {
    setImageInput(evt.target.value);
    console.log("handling form change", evt.target.files[0])
    setFileData(() => {
      return { ...fileData, file: evt.target.files[0] };
    });
  }


  async function getMetaDataAndPreview() {
    setMode("preview")
    console.log("running show preview")

    setMode("preview");
    const input = document.querySelector(".GetImageForm-imageInput");
    console.log("input element:", input)
    const metadata = getMetaData(input);

    setFileData(() => {
      return {
        ...fileData,
        ...metadata,
      };
    });
  }


  async function handleUpload(evt) {
    evt.preventDefault();
    console.log("running handle upload")
    // const formData = {
    //   file: fileData.file,
    //   fileName: fileData.file.name
    // };

    await axios.post(`${BASE_API_URL}/add`, fileData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
    console.log("success");
  }

  return (

    mode === "get image" ?
      (<form onSubmit={getMetaDataAndPreview} className='GetImageForm'>
        <label htmlFor='image'> File Input </label>
        <input
          value={imageInput}
          type="file"
          name="image"
          className="GetImageForm-imageInput"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>) :

      <div>
        <img
          src={URL.createObjectURL(fileData.file)}
          alt={fileData.file.name}
          className="EditImageForm-image" />
        <form onSubmit={handleUpload}>
          <button type="submit">Save</button>
        </form>
      </div>

  );
}

export default App;

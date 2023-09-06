import { useState } from 'react';
import axios from "axios";
import getMetaData from './image';

function App() {

  const [file, setFile] = useState();
  const [imageInput, setImageInput] = useState("");
  const [mode,setMode] = useState("get image")

  function handleChange(evt) {
    setImageInput(evt.target.value);
    setFile(evt.target.files[0]);
  }

 async function showPreview() {
  setMode("preview")
 }


  async function handleSubmit(evt) {
    evt.preventDefault();

    const formData = {
      file:file,
      fileName:file.name
    }

    console.log("formData>>>>>>>>", file);
    await axios.post("http://localhost:5001/add", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
    console.log("success");
  }

  return (

    mode === "get image" ?
    (<form onSubmit={showPreview} >
      <label htmlFor='image'> File Input </label>
      <input
        value={imageInput}
        type="file"
        name="image"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>) :

    <div>
      <img src={URL.createObjectURL(file)} onLoad={getMetaData}/>
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
    </div>

  );
}

export default App;

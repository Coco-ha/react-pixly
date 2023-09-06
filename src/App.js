import { useState } from 'react';
import axios from "axios";

function App() {

  const [file, setFile] = useState();
  const [imageInput, setImageInput] = useState("");

  function handleChange(evt) {
    setImageInput(evt.target.value);
    setFile(evt.target.files[0]);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    const formData = {
      file:file,
      fileName:file.name
    }
    
    console.log("formData>>>>>>>>", file);
    await axios.post("http://localhost:5000/add", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
    console.log("success");
  }

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor='image'> File Input </label>
      <input
        value={imageInput}
        type="file"
        name="image"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;

import { useState } from 'react';
import axios from "axios"

function App() {

  const [formData, setFormData]= useState({
    fileInput: ""
  })


  function handleChange(evt){
    const {fileInput, value} = evt.target
    setFormData({
      ...formData,
      [fileInput]:value
    })
  }

  async function handleSubmit(evt){
    evt.preventDefault();
    console.log("formData>>>>>>>>", formData)
    await axios.post("http://localhost:5001/add", formData, {
      headers:{
        "Content-Type": "multipart/form-data",
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} enctype="multipart/form-data" >
      <label htmlFor='fileInput'> File Input </label>
      <input
        type="file"
        fileInput = "fileInput"
        onChange={handleChange}
      />
    <button type="submit">Submit</button>
    </form>
  )
}

export default App;

import axios from "axios";


const BASE_API_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5001";


/** Makes an api request for uploading an image */
async function uploadImage(data) {
  console.log("data>>>>>>>",data)
  const formData = new FormData()
  formData.set("file", data.file)
  formData.set("make", data.make)
  formData.set("pixelXDimension", data.pixelXDimension)
  formData.set("pixelYDimension", data.pixelYDimension)
  formData.set("model", data.model)
  formData.set("date", data.date)

  await axios.post(`${BASE_API_URL}/add`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });

  console.log("Upload success");

}


export { uploadImage };
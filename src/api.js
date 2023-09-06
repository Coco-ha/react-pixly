import axios from "axios";


const BASE_API_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5001";


/** Makes an api request for uploading an image */
async function uploadImage(data) {

  await axios.post(`${BASE_API_URL}/add`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
  console.log("Upload success");
}


export { uploadImage };
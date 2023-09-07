import axios from "axios";


const BASE_API_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5001";


/** Makes an api request for uploading an image */
async function uploadImage(data) {
  console.log("data>>>>>>>", data);
  const formData = new FormData();
  formData.set("id", data.id);
  formData.set("file", data.file);
  formData.set("file_name", data.file.name);
  if (data.make) formData.set("make", data.make);
  if (data.pixelXDimension) formData.set("pixelXDimension", data.pixelXDimension);
  if (data.pixelYDimension) formData.set("pixelYDimension", data.pixelYDimension);
  if (data.model) formData.set("model", data.model);
  if (data.date) formData.set("date", data.date);
  // if (data.url) formData.set("url", data.url)

  await axios.post(`${BASE_API_URL}/add`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });

  console.log("Upload success");

}

async function getAllImages() {
  const response = await axios.get(`${BASE_API_URL}/images`);
  console.log(response.data);
  return response.data;
}

async function getImageById(id) {
  const response = await axios.get(`${BASE_API_URL}/image/${id}`);
  console.log(response.data);
  return response.data;
}


export { uploadImage, getAllImages, getImageById };
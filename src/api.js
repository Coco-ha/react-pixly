import axios from "axios";


const BASE_API_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5001";


/** Makes an api request for uploading an image
 *
 * Args:
 *  data: {
 *    file (a jpg file),
 *    date (string, optional),
 *    pixelXDimension (int, optional),
 *    pixelYDimension (int, optional),
 *    make (string, optional),
 *    model (string, optional),
 *  }
 *
 * Returns:
 *  {
 *    id,
 *    file_name,
 *    date (string, optional),
 *    pixelXDimension (int, optional),
 *    pixelYDimension (int, optional),
 *    make (string, optional),
 *    model (string, optional),
 *    url,
 *  }
 */
async function uploadImage(file, data) {
  console.log("data>>>>>>>", data);
  console.log("file>>>>>>>", file);


  //set up request object with correct data
  const formData = new FormData();

  formData.set("file", file);
  formData.set("file_name", file.name);
  if (data.date) formData.set("date", data.date);
  if (data.pixelXDimension) formData.set("pixelXDimension", data.pixelXDimension);
  if (data.pixelYDimension) formData.set("pixelYDimension", data.pixelYDimension);
  if (data.make) formData.set("make", data.make);
  if (data.model) formData.set("model", data.model);

  //make request
  console.log(formData.file_name);
  const response = await axios.post(`${BASE_API_URL}/add`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }

  });

  console.log("SERVER RESPONSE", response.data);
  return response.data.image;
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
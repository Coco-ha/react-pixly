import { useState, useEffect } from 'react';
import getMetaData from './image_helpers';
import { uploadImage, getAllImages } from './api';
import AddImageForm from './AddImageForm';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';


// Renders the app
function App() {

  const [images, setImages] = useState([]);
  console.log("App rendered. Images:", images);

  //Get images on mount
  useEffect(function fetchAllImagesOnMount() {
    async function fetchAllImages() {
      const response = await getAllImages();
      setImages(() => [...images, response.images]);
    }

    fetchAllImages();
  }, []);

  //Pushes a new image into the images array
  function addImage(newImage) {
    function addNewImage() {
      setImages([...images, newImage]);
    }
    addNewImage();
  }


  return (
    <BrowserRouter>
      <RoutesList images={images}/>
      {/* <AddImageForm addImage={addImage} /> */}
    </BrowserRouter>
  );
}

export default App;

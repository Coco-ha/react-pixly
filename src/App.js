import { useState, useEffect } from 'react';
import getMetaData from './image_helpers';
import { uploadImage, getAllImages } from './api';
import AddImageForm from './AddImageForm';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import NavBar from './NavBar';
import "./App.css"

// Renders the app
function App() {

  const[isLoading, setIsLoading] = useState(true)
  const [images, setImages] = useState([]);
  const [currentJpg, setCurrentJpg] = useState([])

  console.log("App rendered. Images:", images);

  //Get images on mount
  useEffect(function fetchAllImagesOnMount() {
    async function fetchAllImages() {
      const response = await getAllImages();
      setImages(() => [...images, ...response.images]);
      setIsLoading(false)
    }

    fetchAllImages();
  }, []);

  function updateJpg(file){
    setCurrentJpg(file)
  }

  //Pushes a new image into the images array
  // function addImage(newImage) {
  //   function addNewImage() {
  //     setImages([...images, newImage]);
  //   }
  //   addNewImage();
  // }

  function addImage(image){
    setImages(()=>[image,...images])
  }


  return (
    <section className='App'>
      <div className='App-container'>

        {isLoading ?
          <h3> is Loading...</h3>
          :
          <BrowserRouter>
            <NavBar/>
            <RoutesList
              images={images}
              addImage={addImage}
              jpg={currentJpg}
              updateJpg={updateJpg}/>
            {/* <AddImageForm addImage={addImage} /> */}
          </BrowserRouter>
        }

      </div>
    </section>
  );
}

export default App;

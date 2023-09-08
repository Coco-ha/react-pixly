import { useState, useEffect } from 'react';
import { getAllImages } from './api';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import NavBar from './NavBar';
import "./App.css"

/**Main Application component with routers
 *
 * Props: None
 *
 * State:
 * - isLoading: boolean that indicates if the image is finished loading
 *
 * - images: A list of images
 *      [ {image1}, {image2}, {..}]
 *
 * - currentJpg: the current image that is being previewed
 *      {date,file_name,id,make,model,pixel_x_dimension,pixel_y_dimension, url}
 *
 * App -> Homepage
 *
 */
function App() {

  const[isLoading, setIsLoading] = useState(true)
  const [images, setImages] = useState([]);
  const [currentJpg, setCurrentJpg] = useState()

  console.log("App rendered. Images:", images);

  /** Fetches data from API and updates the state on mount with image info. */
  useEffect(function fetchAllImagesOnMount() {
    async function fetchAllImages() {
      const response = await getAllImages();
      setImages(() => [...response.images]);
      setIsLoading(false)
    }

    fetchAllImages();
  }, []);


  /** sets the image stored in currentJpg */
  function updateJpg(file){
    setCurrentJpg(file)
  }


/** adds an image to images */
  function addImage(image){
    setImages(()=>[image,...images])
  }
  console.log("IMAGES>", images)
  return (
    <section className='App'>
      <div className='App-container'>

        {isLoading ?
          <h3> is Loading...</h3>
          :
          <BrowserRouter>
            <NavBar updateJpg={updateJpg}/>
            <RoutesList
              images={images}
              addImage={addImage}
              jpg={currentJpg}
              updateJpg={updateJpg}/>

          </BrowserRouter>
        }

      </div>
    </section>
  );
}

export default App;

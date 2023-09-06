import { useState } from 'react';
import getMetaData from './image';
import { uploadImage } from './api';
import AddImageForm from './AddImageForm';


// Renders the app
function App() {

  const [ images, setImages] = useState([]);

  //Pushes a new image into the images array
  function addImage(newImage){
    function addNewImage(){
      setImages([...images,newImage])
    }
    addNewImage();
  }


  return (
      <AddImageForm addImage={addImage}/>
  );
}

export default App;

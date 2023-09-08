import { Route, Routes, Navigate } from "react-router-dom";
import AddImageForm from "./AddImageForm";
import Home from "./Home";
import ImagesList from "./ImagesList";
import ImageDetails from "./ImageDetails";
import EditImageForm from "./EditImageForm";
import NewImageForm from "./NewImageForm";

function RoutesList({images, addImage, jpg, updateJpg}){

  return(
    <Routes>
      <Route path="/" element={<Home images={images}/>} />
      <Route path="/add" element={<NewImageForm updateJpg={updateJpg}/>} />
      <Route path="/images/:id" element={<ImageDetails images={images}/>} />
      <Route path="/new/preview" element={<EditImageForm jpg={jpg} updateImagesState={addImage}/>} />
    </Routes>
  )

}


export default RoutesList;
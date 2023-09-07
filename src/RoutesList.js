import { Route, Routes, Navigate } from "react-router-dom";
import AddImageForm from "./AddImageForm";
import Home from "./Home";
import ImagesList from "./ImagesList";
import ImageDetails from "./ImageDetails";

function RoutesList({images, addImage}){

  return(
    <Routes>
      <Route path="/" element={<Home images={images}/>} />
      <Route path="/add" element={<AddImageForm addImage={addImage}/>} />
      <Route path="/images/:id" element={<ImageDetails images={images}/>} />
    </Routes>
  )

}


export default RoutesList;
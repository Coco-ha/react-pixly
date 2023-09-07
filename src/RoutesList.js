import { Route, Routes, Navigate } from "react-router-dom";
import AddImageForm from "./AddImageForm";
import Home from "./Home";
import ImageCard from "./ImageCard";

function RoutesList({images}){

  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add" element={<AddImageForm/>} />
      <Route path="/image/:id" element={<ImageCard images={images}/>} />
    </Routes>
  )

}


export default RoutesList;
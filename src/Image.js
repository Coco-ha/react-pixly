

function Image({image}){
  console.log("image component>>>>", image)
  console.log("imageurl>>>",image.url)
  return (
    <img src={image.url} alt={image.file_name}/>
  )
}

export default Image;




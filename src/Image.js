

function Image(image){
  return (
    <img src={image.url} alt={image.file_name}/>
  )
}

export default Image;
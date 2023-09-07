import ImagesList from "./ImagesList"

function Home({images}){
  return (
    <div className="Home">
      <h3>Welcome to Pixly</h3>
      <ImagesList images={images} />
    </div>
  )
}

export default Home
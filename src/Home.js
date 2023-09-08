import ImagesList from "./ImagesList"

/** Home component which renders the home screen that shows a list of images
 *
 * Props:
 *  images: a list of images
 *
 * State:None
 *
 * App -> Home -> ImagesList
 */
function Home({images}){
  return (
    <div className="Home">
      <h3>Welcome to Pixly</h3>
      <ImagesList images={images} />
    </div>
  )
}

export default Home
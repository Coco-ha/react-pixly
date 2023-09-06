 import EXIF from 'exif-js'

 /** Pulls relevant metadata from an image on load
  *
  * Returns {Date, PixelXDimension,PixelYDimension, Make, Model}
  */
 function getMetaData(fileInput){
    console.log("running getMetaData with", fileInput)

    EXIF.getData(fileInput, function(){

      const specificMetaData = {
        Date: EXIF.getTag(this, "Date"),
        PixelXDimension: EXIF.getTag(this, "PixelXDimension"),
        PixelYDimension: EXIF.getTag(this, "PixelYDimension"),
        Make: EXIF.getTag(this, "Make"),
        Model: EXIF.getTag(this, "Model"),
      }

      console.log("specific meta data", specificMetaData)
      return specificMetaData

    })
  }


  export default getMetaData

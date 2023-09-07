import EXIF from 'exif-js';
import {v4 as uuidv4} from "uuid";


/** Pulls relevant metadata from an image on load
 *
 * Returns {Date, PixelXDimension,PixelYDimension, Make, Model}
 */

 function getMetaData(fileInput, onResolved){
    console.log("running getMetaData with", fileInput)

    EXIF.getData(fileInput, function(){
      console.log("inside exif get data")
      const specificMetaData = {
        id: uuidv4(),
        date: EXIF.getTag(this, "Date"),
        pixelXDimension: EXIF.getTag(this, "PixelXDimension"),
        pixelYDimension: EXIF.getTag(this, "PixelYDimension"),
        make: EXIF.getTag(this, "Make"),
        model: EXIF.getTag(this, "Model"),
        url: EXIF.getTag(this, "url")
      }

      console.log("specificmetadata>>>>", specificMetaData)
      onResolved(specificMetaData)
    })


  }


export default getMetaData;

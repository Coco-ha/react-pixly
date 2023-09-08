import EXIF from 'exif-js';
import { v4 as uuidv4 } from "uuid";
import Jimp from "jimp";


/** Pulls relevant metadata from an image on load
 *
 * Returns {Date, PixelXDimension,PixelYDimension, Make, Model}
 */

function getMetaData(fileInput, onResolved) {
  console.log("running getMetaData with", fileInput);

  EXIF.getData(fileInput, function () {
    console.log("inside exif get data");
    const specificMetaData = {
      date: EXIF.getTag(this, "Date"),
      pixelXDimension: EXIF.getTag(this, "PixelXDimension"),
      pixelYDimension: EXIF.getTag(this, "PixelYDimension"),
      make: EXIF.getTag(this, "Make"),
      model: EXIF.getTag(this, "Model")
    };

    console.log("specificmetadata>>>>", specificMetaData);
    onResolved(specificMetaData);
  });
}

// async function convertToGrayscale(image) {
//   const newImage = await Jimp.read(image.url);
//   newImage.grayscale().write(`${image.url}.jpg`);
// }


export { getMetaData };
  // id: uuidv4(),

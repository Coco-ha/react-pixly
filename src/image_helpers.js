import EXIF from 'exif-js';


/** Pulls relevant metadata from an image on load
 *
 * Returns {Date, PixelXDimension,PixelYDimension, Make, Model}
 */

function getMetaData(imgElement, onSuccess) {
  console.log("running getMetaData with", imgElement);

  EXIF.getData(imgElement, function () {
    console.log("inside exif get data");
    const specificMetaData = {
      date: EXIF.getTag(this, "Date"),
      pixelXDimension: EXIF.getTag(this, "PixelXDimension"),
      pixelYDimension: EXIF.getTag(this, "PixelYDimension"),
      make: EXIF.getTag(this, "Make"),
      model: EXIF.getTag(this, "Model")
    };

    console.log("specificmetadata>>>>", specificMetaData);
    onSuccess(specificMetaData);
  });
}

// async function convertToGrayscale(image) {
//   const newImage = await Jimp.read(image.url);
//   newImage.grayscale().write(`${image.url}.jpg`);
// }


export { getMetaData };
  // id: uuidv4(),

import EXIF from 'exif-js';

/** Pulls relevant metadata from an image on load
 *
 * Returns {Date, PixelXDimension,PixelYDimension, Make, Model}
 */
//  function getMetaData(fileInput){
//     console.log("running getMetaData with", fileInput)
//     let specificDataResult;
//     EXIF.getData(fileInput, function(){
//       console.log("inside exif get data")
//       const specificMetaData = {
//         date: EXIF.getTag(this, "Date"),
//         pixelXDimension: EXIF.getTag(this, "PixelXDimension"),
//         pixelYDimension: EXIF.getTag(this, "PixelYDimension"),
//         make: EXIF.getTag(this, "Make"),
//         model: EXIF.getTag(this, "Model"),
//       }

//       console.log("specificmetadata>>>>", specificMetaData)


//       specificDataResult=specificMetaData
//     })
//     return specificDataResult

//   }




function getMetaData(fileInput) {
  console.log("running getMetaData with", fileInput);
  return new Promise(function (resolve, reject) {
    const specificMetaData = {
      date: EXIF.getTag(this, "Date"),
      pixelXDimension: EXIF.getTag(this, "PixelXDimension"),
      pixelYDimension: EXIF.getTag(this, "PixelYDimension"),
      make: EXIF.getTag(this, "Make"),
      model: EXIF.getTag(this, "Model")
    };
    resolve(specificMetaData);
  });

}

export default getMetaData;

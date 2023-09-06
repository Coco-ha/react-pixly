 import EXIF from 'exif-js'

 function getMetaData(evt){

    EXIF.getData(evt.target, function(){

      const allMetaData = EXIF.getAllTags(this)
      const specificMetaData = {
        Model: EXIF.getTag(this, "Model"),
        AperatureValue:EXIF.getTag(this, "AperatureValue")
      }

      console.log("allMetaData",allMetaData)
      console.log("specific meta data", specificMetaData)
    })
  }


// function getExif() {
//   var img1 = document.getElementById("img1");
//   EXIF.getData(img1, function() {
//       var make = EXIF.getTag(this, "Make");
//       var model = EXIF.getTag(this, "Model");
//       var makeAndModel = document.getElementById("makeAndModel");
//       makeAndModel.innerHTML = `${make} ${model}`;
//   });

  //image.onload

  export default getMetaData

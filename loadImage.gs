function loadImage() {
  var selection = SlidesApp.getActivePresentation().getSelection();
  var selectionRange = selection.getPageElementRange();
 
  if(selectionRange == null)            
    throw "you need to select a image to reload the equation back into the text box"    
    
  var pageElements = selectionRange.getPageElements();
  
  if(pageElements.length <= 0)
    throw "please select a item"
  else if(pageElements.length >= 2)
    throw "can only select one item"
    
    
  var image = pageElements[0].asImage()

  
  console.log("got here");
  return {
    "id": image.getObjectId(),
    "imageProps": JSON.parse(image.getDescription())
  };
}






function addImage(base64String, imageProps, imageId){
  var image;
  let newImageBlob = convertBase64StringToBlob(base64String);
  if(imageId == "")
  {
    var slide = getCurrentSlide();
    image = slide.insertImage(newImageBlob);
    image.setTitle("Math Equation Generated")
  }
  else
  {
    image = findImageSlide(imageId);
    image.replace(newImageBlob)
  }
  image.setDescription(JSON.stringify(imageProps));

  return image.getObjectId();
}

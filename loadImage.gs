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
  return image.getBlob().getBytes();
}





function addImage(blobImage){
  var slide = getCurrentSlide();
  Logger.log("creating image")
  slide.insertImage(createImageFromBlob(blobImage));
  Logger.log("created image")
}

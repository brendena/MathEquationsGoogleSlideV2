function loadImage() {
  let selection = SlidesApp.getActivePresentation().getSelection();
  let selectionRange = selection.getPageElementRange();
 
  if(selectionRange == null)            
    throw "you need to select a image to reload the equation back into the text box"    
    
  let pageElements = selectionRange.getPageElements();
  
  if(pageElements.length <= 0)
    throw "please select a item"
  else if(pageElements.length >= 2)
    throw "can only select one item"
    
    
  let image = pageElements[0].asImage()

  let imageProps = getImageProps(image);

  console.log("got here");
  return {
    "id": image.getObjectId(),
    "imageProps": imageProps
  };
}






function addImage(base64String, imageProps, imageId){
  let image;
  let newImageBlob = convertBase64StringToBlob(base64String);
  var imageHeight = imageProps["height"];
  if(imageId == "")
  {
    let slide = getCurrentSlide();
    image = slide.insertImage(newImageBlob);
    
    /*scale the image down, for some reason they make them very large when first added */
  }
  else
  {
    image = findImageSlide(imageId);
    imageHeight = image.getHeight() * 2; //*2 because it's going to be divided bellow
    image.replace(newImageBlob)
  }

  let h = image.getHeight();
  let w = image.getWidth();
  let r = w/h;


  image.setHeight(imageHeight / 2);
  image.setWidth(imageHeight * r / 2);

  image.setTitle(Image_Title)
  image.setDescription(JSON.stringify(imageProps));

  return image.getObjectId();
}

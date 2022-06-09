const Image_Title = "Math_Equation_Generated"


function getCurrentSlide()
{
  return SlidesApp.getActivePresentation().getSelection().getCurrentPage();
}



function convertBase64StringToBlob(base64String){
  return Utilities.newBlob(Utilities.base64Decode(base64String), MimeType.PNG);  
}



function findImageSlide(imageObjectId){
  var slide = getCurrentSlide();
  var allImage = slide.getImages();
  var imageSlide = undefined;
  for(var i = 0; i < allImage.length; i++)
  {
    if(allImage[i].getObjectId() == imageObjectId){
      imageSlide = allImage[i]
    }
  }
  if(imageSlide == undefined){throw "coudn't get image"}
  
  return imageSlide;
}


function getImageProps(image){
  let title = image.getTitle();
  let description = image.getDescription();
  var newDescription;
  if(title == Image_Title)
  {
    try{
      newDescription = JSON.parse(description);
    }
    catch(e){
      throw "bad image description - " + description
    }  
  }
  //old way of doing it
  else if(title.search("MathEquation") != -1)
  {
    var color = description.split(",")[1];
    var newDescription = {
      "mathType": "LaTEX", //i never actually saved the type
      "color": color,
      "text": description
    };
    image.setTitle(Image_Title);
    image.setDescription(JSON.stringify(newDescription));
  }
  else{
    throw "doesn't look like this image has a math equation attached to it";
  }

  newDescription["height"] = Math.round(image.getHeight());

  return newDescription;
  
}



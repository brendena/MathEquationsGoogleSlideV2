function getCurrentSlide()
{
  return SlidesApp.getActivePresentation().getSelection().getCurrentPage();
}


function convertBase64StringToBlob(base64String){
  return Utilities.newBlob(Utilities.base64Decode(base64String), MimeType.PNG);  
}

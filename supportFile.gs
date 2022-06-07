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












/* this generates a blank image but i don't think i need this anymore */
const transparentPNG = "iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9btSKVInYQcchQdbEgKuKoVShChVArtOpgcukXNGlIUlwcBdeCgx+LVQcXZ10dXAVB8APE0clJ0UVK/F9SaBHjwXE/3t173L0D/PUyU82OcUDVLCOViAuZ7KoQfEUXguhDGKMSM/U5UUzCc3zdw8fXuxjP8j735+hVciYDfALxLNMNi3iDeHrT0jnvE0dYUVKIz4nHDLog8SPXZZffOBcc9vPMiJFOzRNHiIVCG8ttzIqGSjxFHFVUjfL9GZcVzluc1XKVNe/JXxjKaSvLXKc5hAQWsQQRAmRUUUIZFmK0aqSYSNF+3MM/6PhFcsnkKoGRYwEVqJAcP/gf/O7WzE9OuEmhOND5Ytsfw0BwF2jUbPv72LYbJ0DgGbjSWv5KHZj5JL3W0qJHQHgbuLhuafIecLkDDDzpkiE5UoCmP58H3s/om7JA/y3Qs+b21tzH6QOQpq6SN8DBITBSoOx1j3d3t/f275lmfz9A7XKTXQit4gAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+YGBxERGq0BjAsAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAoklEQVR42u3RAQ0AAAjDMMC/52ODkE7C2klKdxoLgAgIEAEBIiBABASIgAgIEAEBIiBABASIgAgIEAEBIiBABASIgAgIEAEBIiBABASIgAgIEAEBIiBABASIgAgIEAEBIiBABASIgAgIEAEBIiBABASIgAgIEAEBIiBABASIgAgIEAEBIiBABASIgAgIEAEBIiBABASIgAAREAEBIiBABOR7C/vNA8XcEndjAAAAAElFTkSuQmCC"

const blobTranspartentImage = Utilities.newBlob(Utilities.base64Decode(transparentPNG), MimeType.PNG);


function addBlankImageAndWait()
{
    var slide = getCurrentSlide();
    Logger.log("creating image")
    imageId = slide.insertImage(blobTranspartentImage);
    Logger.log("created image")
    return imageId;
}

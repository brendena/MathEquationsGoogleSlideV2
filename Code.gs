//Google Triggers
//https://developers.google.com/apps-script/add-ons/concepts/editor-triggers

function onOpen() {
  try{
    SlidesApp.getUi().createMenu('Math Equations')
      .addItem('Menu', 'showSidebar')
      .addToUi();
    Logger.log("onOpen - [worked]");
  }
  catch(e){
    Logger.log("onOpen - [failed] %s",e.error)
  }
  
}

function onInstall(){
  Logger.log("onInstall")
  onOpen();
}

//end google triggers


function doGet() {
  return HtmlService
      .createTemplateFromFile('index')
      .evaluate();
}

function showSidebar() {
  Logger.log("showSidebar")
  var html = doGet().setTitle('Math Equations UI').setWidth(300); //max is 300
  SlidesApp.getUi() // Or DocumentApp or FormApp.
      .showSidebar(html);
}


//used in html to include other html files
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
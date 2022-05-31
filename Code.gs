function onOpen() {
  SlidesApp.getUi().createMenu('Math Equations V2')
      .addItem('Menu', 'showSidebar')
      //.addItem('Refresh Data', 'loadDataToSpreadSheet')
      .addToUi();
   Logger.log("started");
}


function showSidebar() {
  
  var html = doGet().setTitle('Math Equations UI').setWidth(300); //max is 300
  SlidesApp.getUi() // Or DocumentApp or FormApp.
      .showSidebar(html);
}

function onInstall(){
  onOpen();
}


function doGet() {
  return HtmlService
      .createTemplateFromFile('index')
      .evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
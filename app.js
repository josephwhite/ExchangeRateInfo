function changeWallpaper() {
  var totalCount = 1;
  var num = Math.ceil(Math.random()*totalCount);
  document.body.background = 'images/'+num+'.jpg';
  document.body.style.backgroundSize = "cover"; // Background repeat
}

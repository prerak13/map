(function () {
    var example = document.querySelector(".docs-DialogExample-lgHeader");
    var button = example.querySelector(".docs-DialogExample-button");
    var dialog = example.querySelector(".ms-Dialog");
    var label = example.querySelector(".docs-DialogExample-label")
    var actionButtonElements = example.querySelectorAll(".ms-Dialog-action");
    var actionButtonComponents = [];
    // Wire up the dialog
    var dialogComponent = new fabric['Dialog'](dialog);
    // Wire up the buttons
    for (var i = 0; i < actionButtonElements.length; i++) {
      actionButtonComponents[i] = new fabric['Button'](actionButtonElements[i], actionHandler);
    }

    $('[data-toggle="modal"]').click(function (event) {
     event.preventDefault();
     openDialog(dialog); 
    });
    // When clicking the button, open the dialog
    // document.querySelectorAll('[data-toggle="modal"]').onclick = function () {
    //   alert("rrr");
    //   openDialog(dialog);      
    // };
    function actionHandler(event) {
      label.innerText = this.innerText.trim() + " clicked";
    }
    function openDialog(dialog) {
      // Open the dialog
      dialogComponent.open();
    }











    if ($('#chkClickMe').is(':checked') == true){
      zooming("map-image", 4);
 }



$('#chkClickMe').change(function(e){
if ($('#chkClickMe').is(':checked') == true){
      zooming("map-image", 4);

   } 
   else {
   	
   		location.reload(true);
      //window.location=window.location;
      //$('#chkClickMe').prop('checked', false);
      //window.top.location = window.top.location
   }

});








  }());


  function zooming(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);
  function changePosition(e) {
     var a, x = 0, y = 0;
    e = e || window.event;
    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    e.preventDefault();
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    glass.style.left = (x - w-100) + "px";
    glass.style.top = (y - h) + "px";
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
  glass = document.createElement("DIV");
  glass.setAttribute("class", "magGlass");
  img.parentElement.insertBefore(glass, img);
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  glass.addEventListener("mousemove", changePosition);
  img.addEventListener("mousemove", changePosition);
  glass.addEventListener("touchmove", changePosition);
  img.addEventListener("touchmove", changePosition);
  //glass.addEventListener("mouseover", changePosition);
  //img.addEventListener("mouseover", changePosition);

  
}




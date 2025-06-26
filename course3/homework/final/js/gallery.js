/*Name this external file gallery.js*/
function upDate(previewPic){
    /* In this function you should --previewPic
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
      var hoverImage = document.getElementById("image");
        hoverImage.style.backgroundImage = "url('" + previewPic.src + "')";
        hoverImage.innerHTML = previewPic.alt;

       }
function onFocus(){
      var focusImage = document.getElementById("image");
        focusImage.style.backgroundImage = "url('" + previewPic.src + "')";
        focusImage.innerHTML = previewPic.alt;
}
       
function unDo(){
        var unsetImage = document.getElementById("image");
        unsetImage.style.backgroundImage = "url()";
        unsetImage.innerHTML = "Hover over an image below to display here";
              }

function startNow(){
        currentImages = document.querySelectorAll(".preview")
        for (var i = 0; i < currentImages.length; i++){
          console.log("Image " + i)

          currentImages[i].setAttribute("tabindex", "0")
        }
}              
      //  sample code for random image selector
      //  function pickImage(){
      //   options = ["image1.png", "add.png", "all_images.png", "in_array.png", "here.png"]
      //   randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
      //   img = document.querySelector("#header_img")
      //   img.setAttribute("src", randomImg)
      //   img.setAttribute("alt", "")
      //  }
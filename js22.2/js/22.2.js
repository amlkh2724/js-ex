// Create a webpage that has a checkbox. If the checkbox is
// checked, make a photo appear. If it is not, make it disappear
function togglePhoto() {
    let photo = document.querySelector(".photo");
    photo.style.display = (photo.style.display === "block") ? "none" : "block";
  }
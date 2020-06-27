function openmodal() {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("captionmodal");
  modal.style.display = "block";
  $("body").css("overflow", "hidden");
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  console.log("hello");
}
window.onload = function () {
  var img = document.getElementById("myImg");
  var img2 = document.getElementById("myImg2");
  img.onclick = openmodal;
  img2.onclick = openmodal;
  var span = document.getElementsByClassName("close")[0];
  var modal = document.getElementById("myModal");
  span.onclick = function () {
    modal.style.display = "none";
    $("body").css("overflow", "auto");
  };
};

// Get the modal

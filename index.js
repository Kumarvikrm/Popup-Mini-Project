let popupButtonEl = document.getElementById("popupButton");
let okButtonEl = document.getElementById("okButton");
let popupEl = document.getElementById("popup");


function openPopup(){
  popupEl.classList.add("openPopup")
}

function closeButton(){
  popupEl.classList.remove("openPopup")
}

popupButtonEl.addEventListener("click", openPopup);
okButtonEl.addEventListener("click", closeButton);
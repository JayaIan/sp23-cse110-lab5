// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectSound = document.getElementById("horn-select");
  const imageArea = document.querySelector("#expose img");
  const soundSource = document.getElementsByClassName("hidden");
  // console.log(soundSource);
  selectSound.addEventListener("change", (event) => {
    //console.log(event.target.value);
    if (event.target.value == "air-horn") {
      imageArea.src = "assets/images/air-horn.svg";
      soundSource.src = "assets/audio/air-horn.mp3";
    }
    else if (event.target.value == "car-horn") {
      imageArea.src = "assets/images/car-horn.svg";
      soundSource.src = "assets/audio/car-horn.mp3";
    }
    else if (event.target.value == "party-horn") {
      imageArea.src = "assets/images/party-horn.svg";
      soundSource.src = "assets/audio/party-horn.mp3";
    }
    else {
      imageArea.src = "assets/images/no-image.png";
      soundSource.src = "";
    }
  });
}
// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Change image and audio based on user selection
  const selectSound = document.getElementById("horn-select");
  const imageArea = document.querySelector("#expose img");
  const soundSource = document.getElementsByClassName("hidden");
  selectSound.addEventListener("change", (event) => {
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

  // Change volume based on user selection
  const soundVolume = document.getElementById("volume");
  const volumeImage = document.querySelector("div>img");
  //console.log(volumeImage);
  soundVolume.addEventListener("input", (event) => {
    soundSource.volume = event.target.value/100;
    console.log(soundSource.volume);
    if (event.target.value == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
    }
    else if (event.target.value < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
    }
    else if (event.target.value < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
    }
    else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
    }
  });
}
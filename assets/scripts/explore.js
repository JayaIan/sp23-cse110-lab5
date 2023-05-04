// explore.js
window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;
const imageArea = document.querySelector("img");
const textArea = document.querySelector("textarea");
const selectVoice = document.getElementById("voice-select");
const talkButton = document.querySelector("button");
var voices = [];
var speechText;

function init() {
  // load voices into user selection 
  synth.addEventListener("voiceschanged", () => {
    const voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      selectVoice.appendChild(option);
    }
    if (synth.speaking) {
      imageArea.src = "assets/images/smiling-open.png";
    } else {
      imageArea.src = "assets/images/smiling.png";
    }
  });

  // Play voice when button is clicked
  talkButton.addEventListener("click", (event) => {
    speechText = new SpeechSynthesisUtterance(textArea.value);
    synth.speak(speechText);
      // Change to open mouth image
    speechText.addEventListener("start", (event) => {
      imageArea.src = "assets/images/smiling-open.png";
    });

    // Change to close mouth image
    speechText.addEventListener("end", (event) => {
      imageArea.src = "assets/images/smiling.png";
    });
    
  });


}
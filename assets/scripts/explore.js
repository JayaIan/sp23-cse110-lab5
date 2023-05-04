// explore.js
window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;
const imageArea = document.querySelector("img");
const textArea = document.querySelector("textarea");
const selectVoice = document.getElementById("voice-select");
const talkButton = document.querySelector("button");
var voices = [];

function init() {
  // load voices into user selection 
  voices = synth.getVoices();
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    //option.textContent = "This is number: " + i;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    
    selectVoice.appendChild(option);
  }
}
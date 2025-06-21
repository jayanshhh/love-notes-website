const notes = [
 "You make my world brighter every day ☀️",
  "Your Smile makes me so happy!",
  "I'm Proud Of You!",
  "I’m so grateful for you and all the little moments we share 💕",
  "No matter what happens, I’m always here for you 🫶"
];


function showNote() {
  const randomIndex = Math.floor(Math.random() * notes.length);
  document.getElementById("note").innerText = notes[randomIndex];
}

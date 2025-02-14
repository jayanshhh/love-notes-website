const notes = [
  "You make my world brighter every day ☀️",
  "Your Smile Is My Everything!",
  "Bache, you can do everything you dream of.",
  "I'm Proud Of You!",
  "I’m so grateful for you and all the little moments we share 💕",
  "You are loved more than words can ever say ❤️",
  "Every time I see you, my heart skips a beat 💓",
  "No matter what happens, I’m always here for you 🫶"
];

function showNote() {
  const randomIndex = Math.floor(Math.random() * notes.length);
  document.getElementById("note").innerText = notes[randomIndex];
}

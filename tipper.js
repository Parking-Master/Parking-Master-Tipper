const w = window === window.top ? window : window.top;
w.Notiflix ? void(0) : document.body.innerHTML += `<script src="https://cdn.jsdelivr.net/gh/notiflix/Notiflix@latest/dist/notiflix-aio-3.2.5.min.js"></script>`;
w.i = w.Notiflix;
if (!w.i) {
  w.i = w;
  w.i.n = (msg) => new Notification("Parking Master 2.0", { body: msg });
} else {
  w.i.n = w.i.Notify;
  w.i.n.init({timeout:4000,info:{background:"#fff",textColor:"#ddd",notiflixIconColor:"#ddd"}});
}
const tips = [{ type: "tip", text: "Use keyboard shortcuts like the navigation arrows to drive the car" }, { type: "tip", text: "Gamepads like Xbox and PlayStation controllers are supported too" }, { type: "reminder", text: "Signup for a free account and save your points wherever you go" }, { type: "reminder", text: "Use the Autopark (A) Option in all levels for autoparking" }, { type: "reminder", text: "Play world-wide games with the multiplayer option in the main menu." }];
function tip() {
  let tipChosen = tips[Math.floor(Math.random() * tips.length)];
  let prefix = tipChosen.type == "reminder" ? "Hey there!" : "Did you know?";
  let result = prefix + " " + tipChosen.text;
  return(result);
}
w.i.n.info(tip());
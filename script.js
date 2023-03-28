let button_on = document.getElementById("on");
let button_off = document.getElementById("off");

button_on.addEventListener("click", () => {
  let bulb = document.getElementById("off-bulb");
  bulb.src = "https://cdn-icons-png.flaticon.com/512/702/702797.png";
});

button_off.addEventListener("click", () => {
  let bulb = document.getElementById("off-bulb");
  bulb.src = "https://cdn-icons-png.flaticon.com/512/702/702814.png";
});

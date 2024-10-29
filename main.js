let adviceID = document.querySelector(".addy");
let adviceContent = document.querySelector(".quoo");
let loading = document.querySelector(".loading");
let button = document.querySelector(".glow");

let adviceData = async () => {
  let response = await fetch("https://api.adviceslip.com/advice");
  let data = await response.json();
  loading.classList.add("d-none");

  adviceID.textContent = `ADVICE #${data.slip.id}`;
  adviceContent.textContent = `${data.slip.advice}`;
};

button.addEventListener("click", () => {
  location.reload();
});

setTimeout(() => {
  adviceData();
}, 3000);

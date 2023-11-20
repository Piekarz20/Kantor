const button = document.querySelector("button");
const notes = document.querySelector(".notes");
const coins = document.querySelector(".coins");
const aside = document.querySelector("aside");

button.addEventListener("click", (evt) => {
  evt.preventDefault();
  const howMuchCoins = document.querySelector("#howMuchCoins").value;
  const howMuchNotes = document.querySelector("#howMuchNotes").value;
  const kursCoins = document.querySelector("#kursCoins").value;
  const kursNotes = document.querySelector("#kursNotes").value;

  const coinsValue = (howMuchCoins * kursCoins).toFixed(2);
  const notesValue = (howMuchNotes * kursNotes).toFixed(2);

  const display = document.querySelectorAll(".display");
  display.forEach((element) => {
    element.remove();
  });
  const coinsDisplay = document.createElement("p");
  coinsDisplay.innerText = `Wartość banknotów:`;
  coinsDisplay.classList.add("display");
  coinsDisplay.style.padding = "0px";
  coinsDisplay.style.margin = "0px";
  coinsDisplay.style.gap = "0px";
  const coinsDisplayNumber = document.createElement("p");
  coinsDisplayNumber.style.padding = "0px";
  coinsDisplayNumber.style.margin = "0px";
  coinsDisplayNumber.style.gap = "0px";
  coinsDisplayNumber.classList.add("display");
  coinsDisplayNumber.style.color = "rgb(22, 150, 80)";
  coinsDisplayNumber.innerText = `${coinsValue} PLN`;
  coins.append(coinsDisplay);
  coins.append(coinsDisplayNumber);

  const notesDisplay = document.createElement("p");
  notesDisplay.style.padding = "0px";
  notesDisplay.style.margin = "0px";
  notesDisplay.style.gap = "0px";
  notesDisplay.classList.add("display");
  notesDisplay.innerText = `Wartość banknotów:`;
  const notesDisplayNumber = document.createElement("p");
  notesDisplayNumber.style.padding = "0px";
  notesDisplayNumber.style.margin = "0px";
  notesDisplayNumber.style.gap = "0px";
  notesDisplayNumber.classList.add("display");
  notesDisplayNumber.style.color = "rgb(22, 150, 80)";
  notesDisplayNumber.innerText = `${notesValue} PLN`;
  notes.append(notesDisplay);
  notes.append(notesDisplayNumber);

  const summary = (coinsValue + notesValue).toFixed(2);
  const summaryDisplay = document.createElement("p");
  summaryDisplay.classList.add("display");
  summaryDisplay.innerText = `Wartość Twoich środków:`;
  summaryDisplay.style.padding = "0px";
  summaryDisplay.style.margin = "0px";
  summaryDisplay.style.gap = "0px";
  const summaryDisplayNumber = document.createElement("p");
  summaryDisplayNumber.classList.add("display");
  summaryDisplayNumber.style.color = "rgb(22, 231, 39)";
  summaryDisplayNumber.style.padding = "0px";
  summaryDisplayNumber.style.margin = "0px";
  summaryDisplayNumber.style.gap = "0px";
  summaryDisplayNumber.innerText = `${summary} PLN`;
  aside.append(summaryDisplay);
  aside.append(summaryDisplayNumber);
});

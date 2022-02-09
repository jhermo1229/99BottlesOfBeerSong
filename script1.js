var form = document.querySelector("#myForm");
var container = document.querySelector(".container");
let myBeer = document.querySelector("body");
let myBtn = document.querySelector("#myButton");
let myInput = document.querySelector("#myInput");
let title = document.querySelector("#title");
let music = document.querySelector("#myMusic");

function generateSong(input) {
  var arr = [];

  for (let i = input; i >= 0; i--) {
    if (i === 1) {
      arr.push(
        i +
          " bottle of beer on the wall," +
          i +
          " bottle of beer. Take one down, pass it around"
      );
    } else if (i === 0) {
      arr.push("No more bottles left");
    } else {
      arr.push(
        i +
          " bottles of beer on the wall, " +
          i +
          " bottles of beer. Take one down, pass it around"
      );
    }
  }

  return arr;
}

form.addEventListener("submit", function (e) {
  var num = document.querySelector("#myInput").value;
  var input = parseInt(num);
  if (Number.isInteger(input)) {
    let arr = generateSong(input);
    document.getElementById("beerLyrics").innerHTML = arr;
    myBeer.style.backgroundImage = nextBeerImageUrl();
    container.style.borderColor = nextBorderColor();
    myBtn.style.backgroundColor = nextButtonColor();
    title.style.color = nextTitleColor();
    form.style.color = nextFormColor();
    myMusic.style.color = nextMusicColor();
    myInput.value = "";
  } else {
    showAlert("Please input numeric only", "error");
  }

  e.preventDefault();
});

function showAlert(message, className) {
  var div = document.createElement("div");
  div.innerText = message;
  div.className = className;
  div.id = "box";
  container.insertBefore(div, form);

  setTimeout(function () {
    document.querySelector("#box").remove();
  }, 1000);
}

let currentBeerIndex = 0;

function nextBeerImageUrl(e) {
  currentBeerIndex++;
  if (currentBeerIndex === beers.length) {
    currentBeerIndex = 0;
  }

  return beers[currentBeerIndex];
}

let currentBorderColorIndex = 0;

function nextBorderColor(e) {
  currentBorderColorIndex++;
  if (currentBorderColorIndex === borderColors.length) {
    currentBorderColorIndex = 0;
  }

  return borderColors[currentBorderColorIndex];
}

let currentButtonColorIndex = 0;

function nextButtonColor(e) {
  currentButtonColorIndex++;
  if (currentButtonColorIndex === borderColors.length) {
    currentButtonColorIndex = 0;
  }

  return borderColors[currentButtonColorIndex];
}

let currentTitleColorIndex = 0;

function nextTitleColor(e) {
  currentTitleColorIndex++;
  if (currentTitleColorIndex === borderColors.length) {
    currentTitleColorIndex = 0;
  }

  return borderColors[currentTitleColorIndex];
}

let currentFormColorIndex = 0;

function nextFormColor(e) {
  currentFormColorIndex++;
  if (currentFormColorIndex === borderColors.length) {
    currentFormColorIndex = 0;
  }

  return borderColors[currentFormColorIndex];
}

let currentMusicColorIndex = 0;

function nextMusicColor(e) {
  currentMusicColorIndex++;
  if (currentMusicColorIndex === borderColors.length) {
    currentMusicColorIndex = 0;
  }

  return borderColors[currentMusicColorIndex];
}

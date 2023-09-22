// PUT YOUR NAME ON THE SCREEN
let element = document.getElementById("your_name");
element.innerHTML = prompt("Please enter your name: ");

// rotate text
element.style.transform = `rotate3d(1, 1, 1, 180deg)`;
let rotation = "";

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const doRotatiton = async () => {
  for (let i = 0; i < 360; i++) {
    rotation = step + "deg";
    element.style.transform = `rotate3d(1, 1, 1, ${rotation})`;
    await sleep(6000);
  }
}

doRotation();
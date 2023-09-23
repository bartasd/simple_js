// REMARKS: "element" should be initiated by const variable,
// or it must be used inside the IIFE function...

// PUT YOUR NAME ON THE SCREEN
const myName = prompt("Please enter your name: ");

//const el1 = document.getElementById("q1");
const element = document.querySelector('#q1 p');
element.innerHTML = myName;


// rotate text
const keyframe = [
  { transform: "rotate(0)" },
  { transform: "rotate(360deg)" },
];

const effect = {
  duration: 5000,
  iterations: Infinity,
};

element.addEventListener("click", () => {
  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats
  // keyframe keyframe options
  element.animate(keyframe, effect);
});

/*
function changeElement(arg) {
  let quarter = (Math.floor(Math.random() * 100)) % 4 + 1;
  quarter = "q" + quarter;
  arg = document.getElementById(quarter);
  arg.innerHTML = myName;
  
}

changeElement(element);
*/
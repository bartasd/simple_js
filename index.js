const myName = prompt('Please enter your name:');

const random = () =>  Math.floor(Math.random() * 4 );

function afterClick(i){
  if (text[i].innerHTML === myName)
  {
    text[i].innerHTML = '';
    let rn = null;
    do {
      rn = random();
    } while (rn === i);
    text[rn].innerHTML = myName;
  }
  else
  {
    text[i].innerHTML = myName;
    for(let a = 0; a < 4; a++)
    {
      if(text[a].innerText === myName && a !== i)
        text[a].innerText = '';
    }
  }
}

const div = document.querySelectorAll('div');
const text = document.querySelectorAll('p');
for(let i = 0; i < 4; i++)
{
  div[i].addEventListener("click", function onClick() {
    afterClick(i);
  });
}
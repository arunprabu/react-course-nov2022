/* External JS */
function handleClickMeBtn3(event){
  alert('Clicked Btn #3');
  // Event Object
  console.log(event);
  event.target.disabled = true;
  event.target.innerText = 'Clicked';
}

function handleDivClick(event){
  console.log(event);
  let divEl = event.target;
  divEl.style.backgroundColor = "red";
  divEl.style.color = "white";
  divEl.style.height = "150px";
}

function handleAddClick() {
  // DOM Querying API
  // Let's us identify the element in which we need to add paragraph. 
  let myDivEl = document.getElementById("myDiv");
  console.dir(myDivEl);
  
  // Let's create paragraph element thru JS 
  let paraEl = document.createElement('p'); // <p></p>
  console.dir(paraEl);
  paraEl.innerText = "example para"; // <p>example para</p>

  // Let's append the above paraEl inside myDivEl 
  myDivEl.appendChild(paraEl);

}
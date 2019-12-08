// To display the current year at the footer
let date = new Date();
let fullYear = date.getFullYear();
let footerSpan = document.getElementById("date");
footerSpan.innerText = fullYear;

// Create a new list item when clicking on the "Add" button
function newElement() {

  let inputValue = document.getElementById("myInput").value;
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  let tdc = document.createElement("td");
  let anchor = document.createElement("a");
  let anchor2 = document.createElement("a");
  let i = document.createElement("i");
  let idel = document.createElement("i");
  let input = document.createTextNode(inputValue);
  let att = document.createAttribute("data-feather");
  let attdel = document.createAttribute("data-feather");
  let tbody = document.getElementById("body");
  let listOfItems = tbody.childNodes;
  let j;

  anchor.href = "#";
  anchor2.href = "#";
  i.classList.add("align-middle");
  tdc.classList.add("table-action");
  att.value = "edit-2";
  attdel.value = "trash";
  i.setAttributeNode(att);
  idel.setAttributeNode(attdel);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    tr.appendChild(td);
    td.appendChild(input);
    tr.appendChild(tdc);
    anchor.appendChild(i);
    anchor2.appendChild(i);
    anchor2.appendChild(idel);
    tdc.appendChild(anchor);
    tdc.appendChild(anchor2);
  }
  
  for (j = 0; j < listOfItems.length; j++) {
    tbody.appendChild(tr);
  }
  
  document.getElementById('myInput').value='';

  console.log(tr);
}
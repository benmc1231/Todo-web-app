function currentDate(){
    var currentDay = new Date();
    var day = String(currentDay.getDate()).padStart(2, '0');
    var month = String(currentDay.getMonth() + 1).padStart(2, '0');
    var year = currentDay.getFullYear();
    
    currentDay = day + '/' + month + '/' + year;
    document.getElementById("date").innerHTML ="Todays date: " + currentDay;
}

// Create a delete button for each list item
function addDeleteButtons(){
  var myList = document.getElementsByTagName("LI");
  var i;

  for (i = 0; i < myList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "deleteButton";
    span.appendChild(txt);
    myList[i].appendChild(span);
  }
}

//give functionality to the delete buttons
function clickToDeleteButton(){
  var deleteButtons = document.getElementsByClassName("deleteButton");
  var i;
  for (i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//get current date on page loading along with the placeholder list buttons
window.onload = function() {
    currentDate();
    addDeleteButtons();
    clickToDeleteButton();
}

//add new list item
function addItem(){
  var newListItem = document.createElement("li");
  var textForNewItem = document.getElementById("myInput").value;
  var newListText = document.createTextNode(textForNewItem);

  newListItem.appendChild(newListText)
  if (textForNewItem == ""){
      document.getElementById("myInput").placeholder = "You must enter something";
  }
  else {
      document.getElementById("myList").appendChild(newListItem);
  }
  
  //reset text bar
  document.getElementById("myInput").value = "";


  // Create a delete button
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "deleteButton";
  span.appendChild(txt);
  newListItem.appendChild(span);
  
  clickToDeleteButton();
}



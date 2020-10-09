function currentDate(){
    var currentDay = new Date();
    var day = String(currentDay.getDate()).padStart(2, '0');
    var month = String(currentDay.getMonth() + 1).padStart(2, '0');
    var year = currentDay.getFullYear();
    
    currentDay = day + '/' + month + '/' + year;
    document.getElementById("date").innerHTML ="Todays date: " + currentDay;
}

//get current date on page loading
window.onload = function() {
    currentDate();
}

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

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "deleteButton";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}

// Create a close button for each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "deleteButton";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


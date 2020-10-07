function currentDate(){
    var currentDay = new Date();
    var day = String(currentDay.getDate()).padStart(2, '0');
    var month = String(currentDay.getMonth() + 1).padStart(2, '0');
    var year = currentDay.getFullYear();
    
    currentDay = day + '/' + month + '/' + year;
    document.getElementById("date").innerHTML ="Todays date: " + currentDay;
}


window.onload = function() {
    currentDate();
  }


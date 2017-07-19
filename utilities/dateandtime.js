// DATEANDTIME
// Export ALL date and time functions, inline.
// Import  using the * operator (as = allfunctions).

function getCurrentTime(){
  var time = new Date().toLocaleTimeString();
  return console.log(time);
};

function getCurrentDate(){
  var date = new Date().toLocaleDateString();
  return console.log(date);
};

export{ getCurrentTime, getCurrentDate }

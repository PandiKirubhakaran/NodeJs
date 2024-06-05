let figlet=require('figlet')

// var figlet = require("figlet");

figlet("KirubhaSowmy", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
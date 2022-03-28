// ques 1 Write the code to access element which is having id as "text"
// function text(){
// document.getElementById("text").innerText=("Hello");
// }
document.write(document.getElementById("text").innerText="ID");

// ques2 Write the code to access element which is having tag as "h1"

document.write(document.getElementsByTagName('h1').innerText="Hello World");
// console.log(document.getElementById('head').innerText="Tag Name");

// ques 3  Write the code to access element which is having class as "box"

document.write(document.getElementsByClassName("box").innerHTML="BOX");


// ques 4   Change the heading from ""Hello"" to ""Hello World"" using DOM functions"
document.getElementById("chg").innerText="Hello World";


// ques 5  Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.
function flow(){
    document.getElementById("box").style.flexDirection = "column";
}

// ques 6  color changing
document.getElementById("heading").style.color="red";

// ques 7  replace text by clicking
function replace(){
    document.getElementById("replace").innerText="Welcome to Elevation Academy";
}

// que 8 Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second


function clock(){


    var hours = document.getElementById("hour");
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
    var am = document.getElementById("ampm");


    var time = new Date();

    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";


    if (hrs == 0) {
        hrs = 12;
    }

    if (hrs > 12) {
        hrs = hrs - 12;
        am_pm = "PM";
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    hours.innerText = hrs;
    minutes.innerText = mins;
    seconds.innerText = secs;
    am.innerText = am_pm;
}
setInterval(clock,1000);

// ques 9  Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected
function output(){
  var result = document.getElementById("text2");
  var result1 = result.value;
  document.getElementById("output").innerText = result1;
  }

// ques 10   "Create a form having name ,email, phone no. , birth year 
// Add validations - phone no. should start with 91 , it should be 10 digits
// email should be domain prepbytes.com
// birth year should be > 95"

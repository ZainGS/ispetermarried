// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var randomStrings = [
    "<br><br>It's not very important to track whether or not Peter is <b>married</b>, but we do it anyways.",
    "<br><br>Will Peter still be <b>married</b> tomorrow? Come back and find out!",
    "<br><br>If I had a quarter for every time Peter got married <b>married</b> again, I'd have alot of quarters...",
    "<br><br>Some people invest in stocks, I invest in Peter's <b>marriage status</b>.",
    "<br><br>Peter's in the top <b>0.0000000001%</b> of people getting <b>married</b>.",
    "<br><br>If Peter was a <b>dinosaur</b>, would this be <b>IsPterydactylMarried.com?</b>",
    "<br><br>To be <b>married</b>, or not to be <b>married</b>? That is the question.",
    "<br><br>I wonder how many times you've <b>refreshed</b> the page?",
    "<br><br>Four score and seven <b>marriages</b> ago...",
    "<br><br>One small <b>marriage</b> for Peter, one giant <b>marriage</b> for Peterkind.",
    "<br><br>May the <b>Peter</b> be with you.",
    "<br><br>Welcome to <b>IsPeterMarried.com</b>!",
    "<br><br>Legend has it, Peter's <b>divorced</b> more times than you've <b>sneezed</b> in your entire life.",
    "<br><br>Sometimes <b>Peter</b> lays awake at night wondering if <b>Peter's</b> <b>married</b>.",
    "<br><br>Feel free to send Peter <b>wedding</b> gifts. Again.",
    "<br><br>Peter's gotten <b>married</b> more times than he's died in <b>Dark Souls</b>.",
    "<br><br>Peter's gotten <b>married</b> more times than he's died in <b>Dark Souls</b>.",
];

var randomDiv = document.getElementById("myRandomDiv");


function generate() {
    randomIndex = Math.ceil((Math.random() * randomStrings.length - 1));
    newText = randomStrings[randomIndex];
    randomDiv.innerHTML = newText;
}

generate();
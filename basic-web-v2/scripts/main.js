// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    // alert(mySrc);
    if(mySrc === 'images/avatar.png') {
        myImage.setAttribute('src', 'images/lu.jpg');
    } else {
        myImage.setAttribute ('src', 'images/avatar.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUsername() {
    var myName = prompt('Please enter your name:');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUsername();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUsername();
}

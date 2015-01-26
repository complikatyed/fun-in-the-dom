/* browser: true */

'use strict';

document.querySelector('h1').classList.add('red');

var h2s = document.querySelectorAll('h2');
for (var i=0; i < h2s.length; i++) {
  h2s[i].classList.add('blue');
}

// h3s toUpperCase(); 'hello'.toUpperCase() => 'HELLO'
var h3s = document.querySelectorAll('h3');
// for (i=0; i < h3s.length; i++) {
//   h3s[i].textContent = h3s[i].textContent.toUpperCase();
// }

// [] = Array.prototype
[].forEach.call(h3s, function(el){
  el.textContent = el.textContent.toUpperCase();
})

var target = document.querySelector('.target');
var elementString = '<h2>OMG <a href="http://google.com">GOOG</a></h2>'

document.querySelector('#add-element').addEventListener('click', function(){
  target.insertAdjacentHTML('afterend', elementString);
  target.appendChild(createSuperLimeDiv("OMG OMG OMG"));
});

function createSuperLimeDiv(text){
  var docFragment = document.createDocumentFragment();

  var supergreen = document.createElement('div');
  supergreen.setAttribute("class", "supergreen");
  docFragment.appendChild(supergreen);

  var superyellow = document.createElement('div');
  superyellow.setAttribute("class", "superyellow");
  supergreen.appendChild(superyellow);
  var superyellow_text = document.createTextNode(text);
  superyellow.appendChild(superyellow_text);

  return docFragment;
}

document.querySelector('#add-image').addEventListener('click', function () {
  // this = event.target
  // var url = 'http://i.imgur.com/nPEDZd1.png';
  var url = this.previousElementSibling.value;
  this.previousElementSibling.value = '';
  target.appendChild(createImageElement(url));
});


setInterval(function () {
  setRandomColor(document.querySelector('h1'))
}, 1000)

function getRandomColor() {
  return Math.floor(Math.random() * 256);
}

function setRandomColor(element){
  element.style.backgroundColor = randomColor();
}

function randomColor() {
  var red = getRandomColor();
  var green = getRandomColor();
  var blue = getRandomColor();
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}


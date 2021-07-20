window.onload = function() {
  setTimeout(logo, 500);
  setTimeout(menu1, 500);
  setTimeout(menu2, 50);
  setTimeout(media, 500);
  setTimeout(indi, 500);
  setTimeout(content, 500);
  setTimeout(img, 500);
  setTimeout(nav, 500);
}

function logo() {
  var h = document.querySelector("#logo h1");
  h.style.opacity = '1';
}

function menu1() {
  var l = document.querySelectorAll('#menu1 li');
  var i;
  for( i = 0 ; i < l.length ; i++) {
    l[i].style.opacity = '1';
    l[i].style.transform = 'translate(0)';
  }
}

function menu2() {
  var l = document.querySelectorAll('#menu2 li');
  var i;
  for( i = 0 ; i < l.length ; i++) {
    l[i].style.opacity = '1';
    l[i].style.transform = 'translate(0)';
  }
}


function media() {
  var l = document.querySelectorAll('#media li');
  var i;
  for( i = 0 ; i < l.length ; i++) {
    l[i].style.opacity = '1';
    l[i].style.transform = 'translate(0)';
  }
}

function indi() {
  var l = document.querySelectorAll('#indi li');
  var i;
  for( i = 0 ; i < l.length ; i++) {
    l[i].style.opacity = '1';
    l[i].style.transform = 'translate(0)';
  }
}

function content() {
  var head = document.querySelector('#content h1');
  head.style.opacity = '1';
  head.style.transform = 'translate(0)';

  var p = document.querySelector('#content p');
  p.style.opacity = '1';
  p.style.transform = 'translate(0)';

  var button = document.querySelector('#content button');
  button.style.opacity = '1';
  button.style.transform = 'translate(0)';

}

function img() {
  var img = document.querySelector("#img");
  img.style.opacity = '1';
  img.style.transform = 'translate(0)';
}

function nav() {
  var nav = document.querySelector("#navigator");
  nav.style.opacity = '1';
  nav.style.transform = 'translate(0)';
}
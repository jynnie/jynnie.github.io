window.onload = function() {
  bodyLoad();

  document.body.addEventListener('scroll', function(){
    bodyLoad();
  });
}

function bodyLoad(){
  var spot = document.body.scrollTop;
  var bod = document.body;
  var nav = document.getElementById('navbar');
  var white = '#FFFFFF';
  var hack = '#67CAE5';
  var syncc = '#1ABC9C';
  var dos = '#CB5864';
  var art = '#E9B000';
  var classes = '#6E3667';

  if (spot > 450){
    bod.style.background = hack;
    nav.classList.add('light');

    if (spot > 1160){
      bod.style.background = syncc;

      if (spot > 1900){
        bod.style.background = dos;

        if (spot > 2510){
          bod.style.background = art;

          if (spot > 3220){
            bod.style.background = classes;
          }
        }
      }
    }
  } else {
    bod.style.background = white;
    nav.classList.remove('light');
  }
}

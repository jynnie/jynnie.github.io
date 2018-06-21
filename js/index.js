var GALLERY = undefined;

window.onload = function() {
  // bodyLoad();

  // document.body.addEventListener('scroll', function(){
  //   bodyLoad();
  // });

  GALLERY = document.getElementById("gallery");
};

function workFilter(category) {
  for (var f of ["all", "design", "writing", "software", "art"]) {
    GALLERY.classList.remove(f);
    document.getElementById("f-" + f).classList.remove("selected");
  }

  GALLERY.classList.add(category);
  document.getElementById("f-" + category).classList.add("selected");
}

/** Legacy code from design in Dec 2017 */
// function bodyLoad(){
//   var spot = document.body.scrollTop;
//   var bod = document.body;
//   var nav = document.getElementById('navbar');
//   var vh = window.innerHeight;
//
//   if (spot > .5 * vh){
//     nav.classList.add('light');
//   } else {
//     bod.style.background = white;
//     nav.classList.remove('light');
//   }
// }

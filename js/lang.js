var dataReload = document.querySelectorAll("[data-reload]");

var language = {
pl:{
    welcome:"Witamy wszystkich"
},
eng:{
    welcome:"Welcome everyone"
}
};

if (window.location.hash) {
 if (window.location.hash === "#pl") {
    hi.textContent = language.pl.welcome;
 };
 if (window.location.hash === "#eng") {
    hi.textContent = language.eng.welcome;
 }   
}

window.onhashchange = function() {
    location.reload(true);
}
// for (i=0; i <= dataReload.length; i++) {
//     dataReload[i].onclick = function() {
//         location.reload(true);
//     }
// };


function myFunction(x) {
    x.classList.toggle("change");
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('open');
}

function showSlide(x){
    var item = document.querySelector('.slider_item');
    var currentSlide = document.querySelector('.slider_item > img');
     var src = currentSlide.src;
    var res = src.substr(-5, 1);
    if (x != res) {
        var newSrc = 'assets/img/' + x + '.png';
        currentSlide.src ='';
        currentSlide.src = newSrc;

    }

}
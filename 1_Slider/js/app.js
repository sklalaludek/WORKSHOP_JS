document.addEventListener('DOMContentLoaded', function() {

    var next = document.getElementById('nextPicture');
    var prev = document.getElementById('prevPicture');
    var array = [];
    var allLi = document.querySelectorAll('.slider li');
    console.log(allLi);
    var show = 0;

    allLi[show].classList.add('visible');

    next.addEventListener('click', function(){
        allLi[show].classList.remove('visible');
        show++;
        if (show >= allLi.length) {
            show = 0;
        }
        allLi[show].classList.add('visible');
    });

    prev.addEventListener('click', function(){
        allLi[show].classList.remove('visible');
        show--;
        if (show < 0) {
            show = allLi.length - 1;
        }
        allLi[show].classList.add('visible');
    });

});

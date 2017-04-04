document.addEventListener('DOMContentLoaded', function() {

    var allImg = document.querySelectorAll('img');
    var body = document.getElementsByTagName('body');

    for (var i = 0; i < allImg.length; i++) {
        allImg[i].addEventListener('click', showImage);
    }

    function showImage(event) {
        var imgSrc = this.getAttribute('src');
        var newDiv = document.createElement('div');
        var newBtn = document.createElement('button');
        var newImg = document.createElement('img');

        newDiv.classList.add('fullScreen');
        newImg.classList.add('gallery');
        newBtn.classList.add('close');
        newBtn.innerText = 'Close';
        newImg.setAttribute('src', imgSrc);
        newDiv.appendChild(newImg);
        newDiv.appendChild(newBtn);
        document.body.appendChild(newDiv);

        newBtn.addEventListener('click', function(event){
            newDiv.parentNode.removeChild(newDiv);
        });
    }

});

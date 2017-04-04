document.addEventListener('DOMContentLoaded', function() {
    var allImg = document.querySelectorAll('img');
    var tagInput = document.getElementById('tagInput');
    var showButton = document.getElementById('showButton');
    var hideButton = document.getElementById('hideButton');

    showButton.addEventListener('click', function(event){
        var text = tagInput.value;

        tagInput.value = tagInput.defaultValue;

        for (var i = 0; i < allImg.length; i++) {
            var tag = allImg[i].dataset.tag;

            if (tag.indexOf(text) !== -1) {
                allImg[i].classList.remove('invisible');
            }
        }
    });

    hideButton.addEventListener('click', function(event){
        var text = tagInput.value;
        
        tagInput.value = tagInput.defaultValue;
        for (var i = 0; i < allImg.length; i++) {
            var tag = allImg[i].dataset.tag;

            if (tag.indexOf(text) !== -1) {
                allImg[i].classList.add('invisible');
            }
        }
    });

});

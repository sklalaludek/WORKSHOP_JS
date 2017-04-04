document.addEventListener('DOMContentLoaded', function() {
    var menuLi = document.querySelectorAll('.nav>ul>li');

    for (var i = 0; i < menuLi.length; i++) {
        menuLi[i].addEventListener('mouseover', showMenu);
        menuLi[i].addEventListener('mouseout', hideMenu);
    }

    function showMenu(event){
        var subMenuUl = this.querySelector('ul');

        if (subMenuUl !== null) {
            subMenuUl.style.display = 'inline-block';
        }

    }

    function hideMenu(event){
        var subMenuUl = this.querySelector('ul');

        if (subMenuUl !== null) {
            subMenuUl.style.display = 'none';
        }
    }

});

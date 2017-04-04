document.addEventListener('DOMContentLoaded', function() {

    var tooltips = document.querySelectorAll('.tooltip');

    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].addEventListener('mouseover', showText);
        tooltips[i].addEventListener('mouseout', hideText);
    }

    function showText(event){
        var text = this.dataset.text;
        var tooltip = document.createElement('span');

        tooltip.classList.add('tooltipText');
        tooltip.innerText = text;
        this.appendChild(tooltip);
    }

    function hideText(event){
        this.removeChild(this.firstElementChild);
    }

});

$(document).ready(function(){
    var $root = $('html, body');
    $('a').click(function() {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 80
        }, 800);
        return false;
    });
});


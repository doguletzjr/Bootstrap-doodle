$(document).ready(function() {
    $('#sidebar').width($('#sidebar-parent').width());
});
$(document).ready(function() {
    $('.small').width($('.container').width());
});
$(document).ready(function(){
    $(".fa-bars").click(function(){
        $(".nav").toggle();
        $(".overlay").toggle();
    });
});
$(document).ready(function() {
    $('#company-elem-site-header').hover(
        function(){
            $('#first-drop-menu').show();
        }
    )
    $('#hard-menu-elem-2').hover(
        function(){
            $('#second-drop-menu').show();
        },
        function(){
            $('#second-drop-menu').hide();
        }
    )

});
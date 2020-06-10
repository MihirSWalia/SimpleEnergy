$(document).ready(function() {
    $('.custom-navbar .navbar-nav .dropdown a').click(function() {
        $('.custom-navbar .dropdown .dropdown-menu').width($(this).width());
    });
});
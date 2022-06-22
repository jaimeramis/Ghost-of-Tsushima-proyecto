$(document).ready(function () {
    $("#btn_mobile_menu").click(function (e) { 
        e.preventDefault();
        $("#menu_mob").addClass("d-block");
    });
    $("#menu_close").click(function (e) { 
        e.preventDefault();
        $("#menu_mob").removeClass("d-block");
    });
});
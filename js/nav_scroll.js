$(document).ready(function(){       
    $(window).scroll(function () { 
        var scrolltop = $("html").scrollTop();

        if (scrolltop > 100) {
            $("header").addClass("header_color");
        }else{
            $("header").removeClass("header_color");
        }
     });
});
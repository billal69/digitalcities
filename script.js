$(document).ready(function(){
    $(window).bind("scroll",function(){
        let gap =50;
        if($(window).scrolltop()>gap){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
    });
});
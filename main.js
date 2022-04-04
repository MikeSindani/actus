var isactive = false;
$('.menu').on('click',function(){
    if(isactive){
        $(this).removeClass('active');
        $('.bar-lateral').removeClass('menu-open');
        
    }else{
        $(this).addClass('active');
        $('.bar-lateral').addClass('menu-open');
        
    }
    isactive = !isactive;
});

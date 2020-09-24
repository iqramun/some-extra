$(document).ready(function(){
    
    
    
    /*siblings*/
    $(".siblings h3").siblings().css({
       "color":"red",
        "border":"3px solid pink"
    });
    
    /*all function*/
    $(".more button").click(function(){
       $(".more p").css("background-color","pink")
        .slideUp(3000)
        .slideDown(3000)
        .toggle(3000)
        
    });
   /*ajax*/
    $(".please button").click(function(){
        $(".div h1").show(3000)
        .css("color","red")
    });
     $(".please button").click(function(){
        $(".div h2").hide(3000)
        
    });
    
});
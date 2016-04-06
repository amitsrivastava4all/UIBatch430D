
$(document).ready(function(){

    $("button").click(function(){
        $("div>h1>p.c1").html('<i>welcome</i>').css({color:"green"}).slideUp(2000);
       /* if($("div>h1>p.c1").html('<i>welcome</i>').hasClass('red')){
            $("div>h1>p.c1").html('<i>welcome</i>').removeClass();
        }  */
        $("div>h1>p.c1").html('<i>welcome</i>').toggleClass('red');
        //$("div>h1>p.c1").text('<b>welcome</b>');
       // $("div>h1>p.c1").html('welcome');
        $("input[type='text']").val('');
        //$(":text").val('');
        //$("p:nth-child(1)").hide(1000);
    //$("p:eq(0)").hide(1000);
    //$(".style").hide(1000);
    //$("#p1").hide(1000);
});
});

<script>var a,L,epl=$("#main-reply"),str='<small id="plng" style="border:1px solid;padding:2px 3px;margin:0 20px 0 10px;">Написано символов: <b>00</b> </small>';
    epl.parents("fieldset").find("legend").prepend(str);
    function epl3(){a=epl.val().length;
        if(a>9){L=''}else{L='0'};
        $("#plng b").text(L+a)};
    epl3();
    $(".pl-quote").click(function (){setTimeout('epl3()',100)});
    epl.bind('mouseout mousemove keydown keypress keyup',function(e){epl3()});</script>
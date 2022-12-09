<!--блок стиля-->
<div class="go-up" id='ToTop'><img src="http://forumstatic.ru/files/0016/c7/b1/10383.png" border="0" /></div>
<div class="go-down" id='OnBottom'><img src="http://forumstatic.ru/files/0016/c7/b1/71976.png" border="0" /></div>
<style>
    .go-up,.go-down {
    display:none;
    position:fixed; /*позиционируем*/
    right: -4px; /*указываем положение, если слева - left*/
    z-index:9999; /*показываем поверх все элементов на странице*/
    cursor:pointer;
    opacity:.7; /*прозрачность*/
    margin-bottom: 240px; /*отступ снизу (можно не указывать)*/
    width: 47px; /*ширина кнопки*/
    height: 47px; /*высота кнопки*/
}
    .go-up {
    bottom: 200px; /*положение от низа окна браузера верхняя кнопка*/
}
    .go-down {
    bottom: 150px; /*положение от низа окна браузера нижняя кнопка кнопка*/
}
    .go-down:hover,.go-up:hover {
    opacity:1;
}
</style>
<!--кнопки вверх вниз-->
<script type="text/javascript">
    $(function(){
    if ($(window).scrollTop()>="250") $("#ToTop").fadeIn("slow")
    $(window).scroll(function(){
    if ($(window).scrollTop()<="250") $("#ToTop").fadeOut("slow")
    else $("#ToTop").fadeIn("slow")
});
    if ($(window).scrollTop()<=$(document).height()-"999") $("#OnBottom").fadeIn("slow")
    $(window).scroll(function(){
    if ($(window).scrollTop()>=$(document).height()-"999") $("#OnBottom").fadeOut("slow")
    else $("#OnBottom").fadeIn("slow")
});
    $("#ToTop").click(function(){$("html,body").animate({scrollTop:0},"slow")})
    $("#OnBottom").click(function(){$("html,body").animate({scrollTop:$(document).height()},"slow")})
});
</script>
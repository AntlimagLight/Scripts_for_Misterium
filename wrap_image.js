<!--обтекание изображения-->
<script language="javascript">
    elm=document.getElementsByTagName("div")
    for(x in elm) if(elm[x].className=="post-content")
    {
        post = elm[x].innerHTML;
        if(post.indexOf("[/float]") != -1) {
        floats = /\[float=(.*?)\]([^\[]{1,11000})\[\/float\]/gi
        elm[x].innerHTML = elm[x].innerHTML.replace(floats, "<span style='float: $1; margin: 15px; text-align: $1;'>$2</span>")
    }}
</script>
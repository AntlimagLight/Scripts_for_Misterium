<script type="text/javascript">
    if (document.URL.indexOf("viewforum")!=-1)
    {var trs=document.getElementById('pun-main').getElementsByTagName("table")[0].rows
        var io=1
        for (io=1; io<=(trs.length-1); io++)
    {if ((trs[io].className.indexOf("isticky")!=-1)&&(io==1))
    {var portant=document.getElementById('pun-main').getElementsByTagName("table")[0].insertRow(1)
        var im=portant.insertCell(0)
        im.innerHTML="ВАЖНЫЕ  ТЕМЫ"
        im.style.color="#1c1616"
        im.style.backgroundColor="rgba(161, 145, 124, 0.4)"
        im.colSpan="4"}
        else if ((trs[io].className.indexOf("isticky")!=-1)&&(trs[io+1].className.indexOf('isticky')==-1))
    {var normal=document.getElementById('pun-main').getElementsByTagName("table")[0].insertRow(io+1)
        var normal1=normal.insertCell(0)
        normal1.innerHTML="ТЕМЫ  ФОРУМА"
        normal1.style.color="#1c1616"
        normal1.style.backgroundColor="rgba(161, 145, 124, 0.2)"
        normal1.colSpan="4"
    }}}
</script>
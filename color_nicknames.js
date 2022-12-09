<!--Выделение ников цветом-->
<script type="text/javascript">
    inColor("#009999", new Array("Каори"))
    inColor("#660033", new Array("Зик Грейсон", "Энмико","Ровена","Ивейн","Руня"))
    inColor("#3e7f3a", new Array("Траст Криптал", "Кхан Шом"))
    inColor("#1a4780", new Array("Лия", "Исталитирн Эльзерис", "Фламель", "Клеориала", "Regret"))
    inColor("#ffcc99", new Array("Реклама", "Нейтральный персонаж", "Демиург испытаний", "Вольный мастер", "Грандмастер", "Хранитель Золотого Ящика"))

    function inColor(color, myarray){
        var a=document.links
        for(i=0;i<a.length;i++){
            for(q=0;q<myarray.length;q++){
                if(a[i].innerHTML==myarray[q]){
                a[i].innerHTML="<span style=\"color: "+color+";\">"+myarray[q]+"</span>"
                }
            }
        }
    }
</script>
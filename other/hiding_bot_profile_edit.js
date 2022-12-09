<!--Сокрытие редактирования профиля ботов-->
<script>
    var resHideNames = [ "Реклама", "Нейтральный персонаж", "Мистическая Арена", "Мистическая Арена", "Демиург испытаний", "Вольный мастер","Грандмастер" ];
    $('.post-author ul').filter(function() { return (resHideNames.indexOf($('.pa-author a', this).text()) != -1) }).each(function() { $('.pa-respect, .pa-positive', this).hide() });
</script>

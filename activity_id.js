<!-- Индикатор активности пользователя -->
<style>
    .indOnline, .indOffline {
    display: inline-block;
    margin-left: 7px;
    margin-bottom: 1px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    box-shadow: inset 0 0 3px rgba(255, 255, 255, 0.9);
}
    .indOnline {
    background-color: #33CC66;
}
    .indOffline {
    background-color: #aa4e4c;
}
</style>
<script type="text/javascript">
    $('.post-author:not(.online)').find('.pa-author>a').addClass('offline');
    $('.post-author.online').find('.pa-author>a').addClass('online');
    $('.post').each(function(){
    var PostAuthorLogin = $(this).find('li.pa-author>a').text();
    var activeTime = $(this).find('.pa-online').text().split('Активен')[1];
    $(this).find('.pa-author>a.online').after('<img src="/i/blank.gif" class="indOnline" title="'+PostAuthorLogin+' активен" />');
    $(this).find('.pa-author>a.offline').after('<img src="/i/blank.gif" class="indOffline" title="'+PostAuthorLogin+' неактивен" />');
});
</script>
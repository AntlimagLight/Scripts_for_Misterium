<!--Спойлер - контейнер-->
<script type="text/javascript" src="http://szenprogs.ru/scripts/jquery-1.3.2.js"></script>
<script type="text/javascript">
    $(document).ready(function(){
    $('.splLink').click(function(){
        $(this).parent().children('div.splCont').toggle('normal');
        return false;
    });
});
</script>
// I stole this from: https://stackoverflow.com/questions/16240892/jquery-change-button-color-onclick
$('input[type="submit"]').click(function(){
    if(!$(this).hasClass('red'))
          $(this).addClass('red');
});

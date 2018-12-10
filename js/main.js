$(document).ready(function(){
    App.init();
    App.formElements();
});

$('#loading').hide();


function checkAuth()
{
    $.ajax({
        type: 'GET',
        url: __URL_CHECK_AUTH,
        cache: false,
        success: function (retorno) {
            if (retorno != 'true') {
                location.reload();
            }
        },
        error: function () {
            location.reload();
        }
    });
}

setInterval(checkAuth, 60 * 1000);
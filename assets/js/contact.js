$(function () {

    // callbacks related to the Recaptcha
    window.verifyRecaptchaCallback = function (response) {
        $('input[data-recaptcha]').val(response).trigger('change');
    }

    window.expiredRecaptchaCallback = function () {
        $('input[data-recaptcha]').val("").trigger('change');
    }

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#support-form').validator();
    $("#support-form").submit(function(e) {
        document.getElementById('submitbtn').disabled = true;
        document.getElementById('submitbtn').value='Processing...';
        document.getElementById('submitbtn').style.opacity='0.5';
    });
});



$(document).ready(function() {
    const $form = $('.input-group');
    const $error = $('.form-error');

    function validateEmail(email) {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    };

    $('#subscribe-button').on('click', function() {
        const email = $form.find('input').val();
        
        if (validateEmail(email)) {
            $error.addClass('d-none');
            alert('Thank you for subscribing!');
            $form.find('input').val('');
        } else {
            $error.removeClass('d-none');
        }
    });
});
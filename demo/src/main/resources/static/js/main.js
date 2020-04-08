$('#table #eBtn').on('click', function (event) {
    event.preventDefault();
    let href = $(this).attr('href');
    $.get(href, function (user, status) {
        $('#id').val(user.id);
        $('#username').val(user.username);
        $('#password').val(user.password);
    });
    $('#myForm #exampleModal').modal();
});

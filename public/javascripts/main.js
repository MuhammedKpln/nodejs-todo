$(document).ready(function () {
    function finished(id) {
        $.ajax({
            url: 'finish/' + id,
            type: "POST",
            success: function (response) {
                alert('Successfull')
            }
        })
    }


    $('.finishTodo').on('change', function () {
        const id = $(this).data('id')
        finished(id)
    })
})
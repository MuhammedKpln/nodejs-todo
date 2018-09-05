$(document).ready(function () {
    function finished(id, action) {
        alert(action)
        if (action == false) {
            var form_data = { 'finished': true }
        } else {
            alert('bura la')
            var form_data = { 'finished': false }
        }


        $.ajax({
            url: 'finish/' + id,
            type: "POST",
            data: form_data,
            success: function (response) {
                    //
            }
        })
    }


    $('.finishTodo').on('change', function () {
        const id = $(this).data('id')
        const action = $(this).data('finished')
        finished(id, action)
        alert('Successfull')
    })
})
$(document).ready(function () {

    var clickEdit = function () {

        //Scope into object
        var edit = $('#edit');

        //Toggles to active
        edit.toggleClass('active');
    };


    $('.toggle').on('click', function () {
        clickEdit();
    });


    $('input').on('input', function (event) {
        event.preventDefault();

        $('#name').text($('#edit-name').val());

        // console.log('Name Edited: ' + $('#edit-name').val());

        $('#bio').text($('#edit-bio').val());

        // console.log('Bio Edited: ' + $('#edit-bio').val());

        $('#books').text($('#edit-books').val());

        // console.log('Books Edited: ' + $('#edit-books').val());

        $('#js').text($('#edit-js').val());

        // console.log('JS Edited: ' + $('#edit-js').val());


        // clickEdit();
    });

});

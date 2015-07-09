$(document).on('ready', function () {

    // var removeQuote = null;
    // var undo = null;

    $('#submit').on('click', function () {

        var $quoteBlock = $('<div class="quote-block"><p class="quote-text"></p><p class="author"></p><a href="#" class="remove">Remove</a></div>');

        var quote = $('#quote').val();
        var author = $('#author').val();

        $('input').val('');
        $('.container').append($quoteBlock);
        $('.quote-text').last().append('Quote: ' + quote);
        $('.author').last().append(' ' + 'Author: ' + author);
        $('.undo').addClass('show');

    });


    $('.container').on('click', '.remove', function (event) {
        event.preventDefault();
        $(this).parent().fadeOut(1000);

        setTimeout(function () {

            $('.undo').fadeIn(500);

            $('.redo').on('click', function () {

                $('.undo').fadeOut(500);
                $('.quote-block').fadeIn(500);

            })

            setTimeout(function () {
                $('.undo').fadeOut(500);
                $('.quote-block').remove()
            }, 5000);

        }, 500);

    });


    $('.rate').on('mouseover', function () {
        $(this).addClass('rate-hover').prevAll();
    })

    $('.rate').on('mouseleave', function () {
        $(this).nextAll().removeClass('rate-hover');
    })




});

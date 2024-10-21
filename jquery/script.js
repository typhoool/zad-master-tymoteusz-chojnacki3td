$(document).ready(function() {
    $('h1').text('Zadanie z jQuery');
});

$(document).ready(function() {
    $('p').addClass('highlight');
});

$(document).ready(function() {
    $('#image').attr('src', 'https://gmedia.playstation.com/is/image/SIEPDC/fortnite-keyart-01-en-30nov23?$facebook$').show();
});

$(document).ready(function() {
    $('#colorBtn').click(function() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        $('body').css('background-color', randomColor);
    });
});

$(document).ready(function() {
    $('#toggleImageBtn').click(function() {
        $('#image').fadeToggle();
    });
});

$(document).ready(function() {
    $('#slideTextBtn').click(function() {
        $('#textSection').slideToggle();
    });
});

$(document).ready(function() {
    $('#addParaBtn').click(function() {
        $('#content').append('<p>Nowy paragraf.</p>');
    });
});

$(document).ready(function() {
    $('#removeParaBtn').click(function() {
        $('#content p:last').remove();
    });
});

$(document).ready(function() {
    $('#showDateBtn').click(function() {
        const now = new Date();
        const formattedDate = now.toLocaleString();
        $('#date').text('Aktualna data i godzina: ' + formattedDate);
    });
});

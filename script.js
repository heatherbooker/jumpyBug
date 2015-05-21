var image = '<img src="https://cutetheworld.files.wordpress.com/2008/11/cutebug.png" onclick="buttonHandler.jump()">';

var buttonHandler = {

    one: document.getElementById('one'),
    two: document.getElementById('two'),
    three: document.getElementById('three'),
    four: document.getElementById('four'),
    five: document.getElementById('five'),
    six: document.getElementById('six'),
    seven: document.getElementById('seven'),
    eight: document.getElementById('eight'),
    nine: document.getElementById('nine'),


    jump: function(currentSquare) {

        var newSquare = (Math.floor(Math.random() * 9) + 1);
        buttonHandler.numberToWord(newSquare);
        console.log(wordNewSquare);
        buttonHandler.eraseBug(currentSquare);
        buttonHandler.moveBug(wordNewSquare);
    },

    numberToWord: function(number) {

        if (number === 1) {
            wordNewSquare = 'one';
        } else if (number === 2) {
            wordNewSquare = 'two';
        } else if (number === 3) {
            wordNewSquare = 'three';
        } else if (number === 4) {
            wordNewSquare = 'four';
        } else if (number === 5) {
            wordNewSquare = 'five';
        } else if (number === 6) {
            wordNewSquare = 'six';
        } else if (number === 7) {
            wordNewSquare = 'seven';
        } else if (number === 8) {
            wordNewSquare = 'eight';
        } else {
            wordNewSquare = 'nine';
        }
    },

    eraseBug: function(currentSquare) {
        buttonHandler[currentSquare].innerHTML = "";
    },

    moveBug: function(wordNewSquare) {
        buttonHandler[wordNewSquare].innerHTML = image;
    },

};
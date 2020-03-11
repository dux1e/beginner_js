const container = document.getElementById('container')
const text = document.getElementById('text')


function colorChange() {
    if(text.style.color == 'black') {
        text.style.color = 'pink';
    } else {
        text.style.color = 'black';
    }
}
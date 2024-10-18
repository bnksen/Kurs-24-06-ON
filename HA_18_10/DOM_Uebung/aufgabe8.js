let boxes = document.getElementsByClassName('box');
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function() {
    for (let j = 0; j < boxes.length; j++) {
      boxes[j].style.backgroundColor = 'blue';
    }
  });
}
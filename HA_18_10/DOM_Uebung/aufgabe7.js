document.getElementById('submit').addEventListener('click', function() {
    let inputValue = document.getElementById('user-input').value;
    let newParagraph = document.createElement('p');
    newParagraph.textContent = inputValue;
    this.parentNode.appendChild(newParagraph);
  });
  
// function untuk redirect ke beberapa Link
function redirInstragram() {
  window.location.href = "https://instagram.com/bg_dar05";
}
function redirWhatsapp() {
  window.location.href = "https://wa.me/+629523135244";
}


//ganti ganti bacgrounH
document.getElementById('submit-comment').addEventListener('click', function () {
  const commentInput = document.getElementById('comment-input');
  const commenText = commentInput.value.trim();
  if (commenText) {
    addComment(commenText);
    commentInput.value = '';
  }
})
function addComment(text) {
  const commentElement = document.createElement('div');
  commentElement.className = 'comment';
  commentElement.innerHTML = `<div class="comment-text">${text}</div>
                            <div class="action">
                              <button class="edit-comment">Edit</button> 
                              <button class="delete-comment">Delete</button>
                            </div>`;

  document.querySelector('.comments-list').appendChild(commentElement);
  commentElement.querySelector('.edit-comment').addEventListener(
    'click', function () {
      const newtext = prompt('Edit Comentarmu :', text);

      if (newtext) {
        commentElement.querySelector('.comment-text').textContent = newtext;

      }
    });
  commentElement.querySelector('.delete-comment').addEventListener('click', () => {
    commentElement.remove();
  });
}




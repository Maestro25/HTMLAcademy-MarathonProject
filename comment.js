
let commentField = document.querySelector('.comment-field');
let commentList = document.querySelector('.comment-list');
let commentForm = document.querySelector('.comment-form');
let commentName = document.querySelector('.comment-name');


commentForm.onsubmit = function(evt) {
	evt.preventDefault();

	let commentItem = document.createElement('div');
	commentItem.classList.add('comment-item')
	let commentAuthor = document.createElement('div');
	commentAuthor.classList.add('comment-author')
	let commentAuthorImg = document.createElement('div');
	commentAuthorImg.classList.add('comment-author-img');
	let	commentAuthorName = document.createElement('span');
	commentAuthorName.classList.add('comment-author-name');
	let newComment = document.createElement('p');
	newComment.textContent = commentField.value;
	commentAuthorName.textContent = commentName.value;
	
	commentName.value = '';
	commentField.value = '';
	
	commentList.append(commentItem);
	commentItem.append(commentAuthor);
	commentAuthor.append(commentAuthorImg);
	commentAuthor.append(commentAuthorName);
	commentItem.append(newComment);

};


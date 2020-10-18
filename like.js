let likeButton = document.querySelector('.like-button');
let likeNumber = document.querySelector('.like-number');


likeButton.onclick = function () {
	if (likeButton.classList.contains('added')) {
		likeNumber.textContent--;
	} else {
		likeNumber.textContent++
	}
	likeButton.classList.toggle('added');
};
function aumentarLike(id) {
    const likesElement = document.getElementById(id);
    let currentLikes = parseInt(likesElement.textContent);
    currentLikes++;
    likesElement.textContent = currentLikes + (currentLikes === 1 ? ' like' : ' likes');
}

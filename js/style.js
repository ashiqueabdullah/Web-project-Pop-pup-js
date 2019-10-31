var mainImage = document.querySelectorAll('.main-img');
var modalImg = document.querySelector('.modal-img');
var close = document.querySelector('.close');

for (let i = 0; i < mainImage.length; i++) {
    mainImage[i].addEventListener('click', function() {
        document.getElementById('display-modal').style.display = 'block';
        modalImg.src=mainImage[i].src
    })
}


 close.addEventListener('click', function() {
        document.getElementById('display-modal').style.display = 'none';
 })
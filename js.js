'use strict'

const imagesList = document.querySelectorAll('.img');
// const imagesList = document.querySelectorAll('.item_card');

imagesList.forEach(img => {

    img.addEventListener('click', () => {
        if (!img.classList.contains('active')) {
            imagesList.forEach(el => {
                el.classList.remove('active');
            })
            img.classList.add('active');
        }
    })

});





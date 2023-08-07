'use strict'

const img = document.querySelectorAll('.img');
const icon = document.querySelectorAll('.icon');
const placeName = document.querySelectorAll('.place_name');



// img[0].classList.remove('img');
// img[0].classList.add('img_show');
// icon[0].classList.remove('icon');
// icon[0].classList.add('icon_show');
// placeName[0].classList.remove('place_name');
// placeName[0].classList.add('place_name_show');

img.forEach(images =>{

    images.addEventListener('click', e =>{
        images.classList.toggle('active')
    })

});





// img.classList.remove('img');
// img.classList.add('img_show');
// icon.classList.remove('icon');
// icon.classList.add('icon_show');
// placeName.classList.remove('place_name');
// placeName.classList.add('place_name_show');
// img.classList.toggle('active');





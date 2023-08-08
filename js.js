'use strict'
// TODO: (MDN) what is use-strict

const cardList = document.querySelectorAll('.item_card');

cardList.forEach(card => {

    card.addEventListener('click', () => {
        if (!card.classList.contains('active')) {
            cardList.forEach(el => {
                el.classList.remove('active');
            })
            card.classList.add('active');
        }
    })

});





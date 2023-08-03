const imageOne = document.querySelectorAll('.img')[0];
const imageTwo = document.querySelectorAll('.img')[1];
const imageThree = document.querySelectorAll('.img')[2];
const imageFour = document.querySelectorAll('.img')[3];
const imageFive = document.querySelectorAll('.img')[4];

const textOne = document.querySelector('.textOne');


imageOne.addEventListener('click' , expandOne);
imageTwo.addEventListener('click' , expandTwo);
imageThree.addEventListener('click' , expandThree);
imageFour.addEventListener('click' , expandFour);
imageFive.addEventListener('click' , expandFive);

// let checker = ;



function expandOne(){
    if(imageOne.clientWidth == 350){
        imageOne.style.width = '50px';
        textOne.style.display = 'none';
    }else{
        imageOne.style.width = '350px';
        imageTwo.style.width = '50px';
        imageThree.style.width = '50px';
        imageFour.style.width = '50px';
        imageFive.style.width = '50px';
        textOne.style.display = 'block';
    }
}


function expandTwo(){
    if(imageTwo.clientWidth == 350){
        imageTwo.style.width = '50px';
        textOne.style.display = 'none';
    }else{
        imageTwo.style.width = '350px';
        imageOne.style.width = '50px';
        imageThree.style.width = '50px';
        imageFour.style.width = '50px';
        imageFive.style.width = '50px';
        textOne.style.display = 'none';
    }
}

function expandThree(){
    if(imageThree.clientWidth == 350){
        imageThree.style.width = '50px';
    }else{
        imageThree.style.width = '350px';
        imageTwo.style.width = '50px';
        imageOne.style.width = '50px';
        imageFour.style.width = '50px';
        imageFive.style.width = '50px';
        textOne.style.display = 'none';
    }
}

function expandFour(){
    if(imageFour.clientWidth == 350){
        imageFour.style.width = '50px';
    }else{
        imageFour.style.width = '350px';
        imageTwo.style.width = '50px';
        imageThree.style.width = '50px';
        imageOne.style.width = '50px';
        imageFive.style.width = '50px';
        textOne.style.display = 'none';
    }
}

function expandFive(){
    if(imageFive.clientWidth == 350){
        imageFive.style.width = '50px';
    }else{
        imageFive.style.width = '350px';
        imageTwo.style.width = '50px';
        imageThree.style.width = '50px';
        imageFour.style.width = '50px';
        imageOne.style.width = '50px';
        textOne.style.display = 'none';
    }
}




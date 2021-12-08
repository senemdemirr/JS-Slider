const imgs = document.getElementById('imgs');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const img = document.querySelectorAll('#imgs img');

let counter = 0 ;
function changeImage(){
    if(counter > img.length - 1){
        counter = 0;

    }
    else if(counter < 0){
        counter = img.length - 1;
    }
    imgs.style.transform = `translateX(${-counter * 460}px)`;
}

nextBtn.addEventListener('click' , function change(){
    counter++;
    changeImage();
} );

prevBtn.addEventListener('click' , function change(){
    counter--;
    changeImage();
} );
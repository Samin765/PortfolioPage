let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev');
}

    document.getElementById('button1').onclick = function() {
        window.location.href = 'https://open.spotify.com/track/3C7Nz7RC1aMfE1GFX0Dlqf?si=4d1cbe25eca148e8';
    };
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);
function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }
    else{
        let positionLastItem = itemSlider.length = 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }
    
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');

    }, timeRunning)

    clearTimeout(runAutoRun);
}
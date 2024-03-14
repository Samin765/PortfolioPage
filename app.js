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

document.getElementById('asmeSpotifyButton').onclick = function() {
        window.location.href = 'https://open.spotify.com/track/3C7Nz7RC1aMfE1GFX0Dlqf?si=4d1cbe25eca148e8';
};

document.getElementById('asmeGeniusButton').onclick = function() {
    window.location.href = 'https://genius.com/Asme-untouchable-outro-lyrics';
};

document.getElementById('atGeniusButton').onclick = function() {
    window.location.href = 'https://genius.com/A36-at-lyrics';
};

document.getElementById('atSpotifyButton').onclick = function() {
    window.location.href = 'https://open.spotify.com/track/1QeTYlZFNKFzPaGWGRBfJd?si=4f1d1677207a4184';
};

document.getElementById('devilishGeniusButton').onclick = function() {
    window.location.href = 'https://genius.com/Vc-barre-devilish-lyrics';
};

document.getElementById('devilishSpotifyButton').onclick = function() {
    window.location.href = 'https://open.spotify.com/track/21qmv5S238wxa9ZDiwbllJ?si=f4683d8d2a624e25';
};

document.getElementById('jdGeniusButton').onclick = function() {
    window.location.href = 'https://genius.com/Ricky-rich-j-d-lyrics';
};

document.getElementById('jdSpotifyButton').onclick = function() {
    window.location.href = 'https://open.spotify.com/track/4pxrY2jNvjG6FQu6v9d9df?si=22da2dafbd614d3f';
};


document.getElementById('mannGeniusButton').onclick = function() {
    window.location.href = 'https://genius.com/G1ocatore-mannequins-lyrics';
};

document.getElementById('mannSpotifyButton').onclick = function() {
    window.location.href = 'https://open.spotify.com/track/2uMotJtjJomshzpQcV6pSM?si=1f9765fa016c4f7b';
};

document.getElementById('flightGeniusButton').onclick = function() {
    window.location.href = 'https://genius.com/Kristian-mecha-flightmode-lyrics';
};

document.getElementById('flightSpotifyButton').onclick = function() {
    window.location.href = 'https://open.spotify.com/track/1O1dVflkvI0TT1zxNIO3OQ?si=4ce55b938d0e46a2';
};

document.getElementById('gårsönderSpotifyButton').onclick = function() {
    window.location.href = 'https://open.spotify.com/track/7fjDMaPfyBkpxMNjwdPaFk?si=b20c1721830840d8';
};


document.getElementById('delliSpotifyButton').onclick = function() {
    window.location.href = 'https://open.spotify.com/track/7GynlLqVh7TspWVo7SOEz3?si=c1cb45b738544322';
};

document.getElementById('museum').onclick = function() {
    window.location.href = 'https://www.varldskulturmuseerna.se/en/';
};

document.getElementById('github').onclick = function() {
    window.location.href = 'https://github.com/Samin765';
};




let timeRunning = 3000;
let timeAutoNext = 4500;
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
        let positionLastItem = itemSlider.length - 1;
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
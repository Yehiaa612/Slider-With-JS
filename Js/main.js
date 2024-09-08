var allImges = Array.from(document.querySelectorAll('img')) ; // make arraylist of all images to array 
// console.log(allImges);

var myLayer = document.querySelector('.mylayer');
var innerDiv= document.querySelector('.innerDiv');
var nextArrow = document.querySelector('.fa-arrow-right');
var prevArrow = document.querySelector('.fa-arrow-left');
var closeIcon = document.querySelector('.fa-xmark');
var indexOfClickedElement = 0;


for(var i=0 ; i<allImges.length ; i++){
    allImges[i].addEventListener('click', function(e){
        myLayer.classList.remove('d-none');
        var clickedImg = e.target;
        var clickedImgSrc = clickedImg.getAttribute('src') ;
        indexOfClickedElement = allImges.indexOf(clickedImg);
        temp=indexOfClickedElement;
        console.log(  allImges.indexOf(clickedImg));
        innerDiv.style.backgroundImage = `url("${clickedImgSrc}`;

    });
}

function getNextValue() {
    indexOfClickedElement++;
    if (indexOfClickedElement==allImges.length) {
        indexOfClickedElement=0;
    }
    var srcNextImg = allImges[indexOfClickedElement].getAttribute('src');
    innerDiv.style.backgroundImage = `url("${srcNextImg}")`
}
function getPrevValue() {
    indexOfClickedElement--;
    if (indexOfClickedElement==-1) {
        indexOfClickedElement=allImges.length - 1;
    }
    var srcNextImg = allImges[indexOfClickedElement].getAttribute('src');
    innerDiv.style.backgroundImage = `url("${srcNextImg}")`}
function hideElement() {
    myLayer.classList.add('d-none')
}
nextArrow.addEventListener('click',getNextValue );
prevArrow.addEventListener('click',getPrevValue );
closeIcon.addEventListener('click',hideElement );

document.addEventListener('keydown',function(e) {
    if (e.code=="ArrowRight") {
        getNextValue();
    }
    else if(e.code=="ArrowLeft"){
        getPrevValue();
    }
    else if(e.code=="Escape"){
        hideElement();
    }
})

myLayer.addEventListener('click', function(e){

    console.log(e);
    

    if (e.target == myLayer) {
        hideElement();
    }
})
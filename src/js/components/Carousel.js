import {select} from '../settings.js';

class Carousel{
  constructor(){
    const thisElement = this;

    thisElement.getElements();

  }

  getElements(){
    const thisElement = this;


    thisElement.carousel = document.querySelectorAll(select.carousel.element);
    //thisElement.dots = document.querySelectorAll(select.carousel.dots);
    let allCarousels = thisElement.carousel;


    console.log('allCarousels',allCarousels[0]);
    console.log('allCarousels2',allCarousels[1]);
    console.log('allCarousels3', allCarousels[2]);

    function nextItem (){
      for (let item = 0; item < allCarousels.length; item++){
        allCarousels[item].classList.remove('active');
        //thisElement.dots[item].classList.remove('active');
        item = (item + 1);
        allCarousels[item].classList.add('active');
        //thisElement.dots[item].classList.add('active');
      }
    }
    setTimeout(nextItem,3000);
  }
}



export default Carousel;

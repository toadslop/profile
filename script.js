function makeCarousel(carouselID) {
  var prev = document.querySelector(`${carouselID} .prev`);
  var next = document.querySelector(`${carouselID} .next`);
  var index = 0;
  var lis = document.querySelectorAll(`${carouselID} ul.slider li`);
  var count = lis.length;
  console.log(carouselID);

  prev.addEventListener('click', function() {
    lis[index].classList.remove('visible');
    index--;
    if (index < 0){
        index = count-1;
    }

    lis[index].classList.add('visible');
});

  next.addEventListener('click', function() {
      lis[index].classList.remove('visible');
      index++;
      if (index > count-1){
          index = 0;
      }

      lis[index].classList.add('visible');
  });
}

makeCarousel('#kinzame');

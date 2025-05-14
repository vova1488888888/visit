const slides = document.querySelectorAll('.slide-card');

function slideShow(){

  // следить за классом .active-crd
  const current = document.querySelector('.active-crd')
  // ----
  // убираем .active-crd если есть .active-crd
  current.classList.remove('active-crd');

  // если добавляем класс .active-crd
  if (current.nextElementSibling){

    current.nextElementSibling.classList.add('active-crd')
  } else {
    slides[0].classList.add('active-crd')
  }

  // сколько секунд видим 1 услугу- 3 секунды
  setTimeout('slideShow()', 3000)

}

// запускаем слайдер с услугами
window.onload = slideShow
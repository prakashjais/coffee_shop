var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let searchBtn = document.querySelector('.search-box')
document.querySelector('#search-box').onclick = () => {
  searchBtn.classList.toggle('search-box-active')
}

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// var swiper1 = new Swiper1(".mySwiper1", {
//   effect: "cards",
//   grabCursor: true,
// });

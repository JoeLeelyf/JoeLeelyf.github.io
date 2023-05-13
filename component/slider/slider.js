const slideshow = document.querySelector('.slideshow');
const slideshowImages = document.querySelectorAll('.slideshow img');

let slideIndex = 0;
let slideInterval = null;

function showSlides() {
  // 隐藏所有图片
  for (let i = 0; i < slideshowImages.length; ++i) {
    slideshowImages[i].classList.remove('active');
  }

  // 显示当前图片
  slideshowImages[slideIndex].classList.add('active');

  // 更新索引
  slideIndex = (slideIndex + 1) % slideshowImages.length;
}

// 开始轮播
function startSlideshow() {
  slideInterval = setInterval(showSlides, 2000);
}

// 停止轮播
function stopSlideshow() {
  clearInterval(slideInterval);
}

// 开始轮播
startSlideshow();

// 绑定鼠标悬停事件
slideshow.addEventListener('mouseenter', stopSlideshow);
slideshow.addEventListener('mouseleave', startSlideshow);

// navbar.js
function insertNavbar(container) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var navbarHTML = xhr.responseText;
      var containerElement = document.querySelector(container);
      containerElement.insertAdjacentHTML('beforeend', navbarHTML);

      // 加载CSS文件
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'css/navbar.css';
      document.head.appendChild(link);

      // 加载JS文件
      var script = document.createElement('script');
      script.src = 'js/navbar.js';
      document.body.appendChild(script);

      // 设置当前页面导航栏字体加粗
      setActiveLink();
    }
  };
  xhr.open('GET', 'partials/navbar.html', true);
  xhr.send();
}


function setActiveLink() {
  var navLinks = document.querySelectorAll('.nav-link');
  var currentUrl = window.location.href;
  for (var i = 0; i < navLinks.length; i++) {
    if (navLinks[i].href === currentUrl) {
      navLinks[i].classList.add('active');
    }
  }
}


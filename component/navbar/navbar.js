// 创建一个div元素，用于容纳导航栏
const navbarContainer = document.createElement('div');
navbarContainer.id = 'navbar-container';
navbarContainer.style.cssText = 'float: left; width: 200px; height: 100%;';

// 使用XMLHttpRequest读取navbar.html文件的内容
const xhr = new XMLHttpRequest();
xhr.open('GET', 'component/navbar/navbar.html');
xhr.onload = function () {
  if (xhr.status === 200) {
    // 将读取到的内容插入到navbarContainer中
    navbarContainer.innerHTML = xhr.responseText;

    // 判断当前页面，将对应的导航栏菜单项加粗
    const currentPageUrl = window.location.href;
    const navItems = navbarContainer.querySelectorAll('.navbar-item');
    for (let i = 0; i < navItems.length; i++) {
      const navItemUrl = navItems[i].getAttribute('data-url');
      if (navItemUrl === currentPageUrl) {
        navItems[i].classList.add('active');
      }
    }
  }
};
xhr.send();

// 插入navbarContainer到页面中
document.body.insertBefore(navbarContainer, document.getElementById('main-container'));

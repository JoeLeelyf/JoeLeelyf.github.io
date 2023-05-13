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
  }
};
xhr.send();

// 插入navbarContainer到页面中
document.body.insertBefore(navbarContainer, document.getElementById('main-container'));


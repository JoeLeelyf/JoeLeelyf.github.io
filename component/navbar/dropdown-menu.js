// 选择所有class="dropdown-menu"的元素
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

// 遍历所有下拉菜单元素
dropdownMenus.forEach(menu => {
  // 为每个元素添加点击事件处理程序
  menu.previousElementSibling.addEventListener('click', () => {
    // 切换下拉菜单元素的hidden属性的值
    menu.classList.toggle('hidden');
  });
});

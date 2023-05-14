// 等待页面加载完成
window.addEventListener('load', function() {
  // 获取包含所有文字的 div 元素
  const container = document.querySelector('#container');
  // 将每个文字包裹在一个块级元素内
  container.innerHTML = container.innerText
    .split('')
    .map(ch => `<span>${ch}</span>`)
    .join('');
});

// example1_script.js
// 傳統語法：僅使用 var、function、字串串接

// 顯示提示窗
alert('');

// 在 Console 顯示訊息
console.log('Hello JavaScript from console');

// 在頁面指定區域輸出文字
var el = document.getElementById('result');
el.textContent = '這行文字是由外部 JS 檔案寫入的。';
// 增加一行你的姓名跟學號
el.textContent += '\n我的姓名學號是412630757王心縈。';

var btn = document.getElementById('showMessage');
btn.addEventListener('click', function() {
  alert('歡迎來到 JavaScript！');
});
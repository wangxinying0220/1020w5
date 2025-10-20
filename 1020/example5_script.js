// example5_script.js
// 以巢狀 for 產生使用者指定範圍的乘法表

// 取得使用者輸入
var start = parseInt(prompt('請輸入乘法起始數字（1~9）：'), 10);
var end = parseInt(prompt('請輸入乘法結束數字（1~9）：'), 10);

var output = '';

// 防呆：檢查輸入是否有效
if (
  isNaN(start) || isNaN(end) ||
  start < 1 || end > 9 ||
  start > end
) {
  output = '輸入範圍無效！請輸入 1~9 之間的整數，且起始數 ≤ 結束數。';
} else {
  // 巢狀 for 迴圈：依使用者輸入的範圍產生乘法表
  for (var i = start; i <= end; i++) {
    for (var j = 1; j <= 9; j++) {
      output += i + 'x' + j + '=' + (i * j) + '\t';
    }
    output += '\n';
  }
}
document.getElementById('result').textContent = output;

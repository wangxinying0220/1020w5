// example2_script.js
// 變數宣告與基本型態操作

var text = '123';              // 字串
var num = 45;                  // 數字
var isPass = true;             // 布林
var emptyValue = null;         // 空值
var notAssigned;               // undefined（尚未指定）

// 型態檢查
var lines = '';
lines += 'text = ' + text + '，typeof: ' + (typeof text) + '\n';
lines += 'num = ' + num + '，typeof: ' + (typeof num) + '\n';
lines += 'isPass = ' + isPass + '，typeof: ' + (typeof isPass) + '\n';
lines += 'emptyValue = ' + emptyValue + '，typeof: ' + (typeof emptyValue) + '\n';
lines += 'notAssigned = ' + notAssigned + '，typeof: ' + (typeof notAssigned) + '\n\n';

// 轉型
var textToNumber = parseInt(text, 10); // 將 '123' → 123
lines += 'parseInt(\'123\') = ' + textToNumber + '\n';
lines += 'String(45) = ' + String(num) + '\n';

document.getElementById('result').textContent = lines;

var input1 = prompt('請輸入第一個數字：');
var input2 = prompt('請輸入第二個數字：');

// 將輸入的字串轉成數字
var number1 = Number(input1);
var number2 = Number(input2);

// 計算總和
var sum = number1 + number2;

// 顯示結果
lines += '輸入的第一個數字：' + number1 + '\n';
lines += '輸入的第二個數字：' + number2 + '\n';
lines += '兩數相加結果：' + sum + '\n';

// 輸出到頁面
document.getElementById('result').textContent = lines;

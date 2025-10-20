// lab_score_calculator.js
// 以 prompt 取得五科成績，計算平均與等第，並檢查不及格科目

function toNumber(str) {
  var n = parseFloat(str);
  return isNaN(n) ? null : n;
}

function gradeFrom(avg) {
  var g = 'F';
  if (avg >= 90) {
    g = 'A';
  } else if (avg >= 80) {
    g = 'B';
  } else if (avg >= 70) {
    g = 'C';
  } else if (avg >= 60) {
    g = 'D';
  } else {
    g = 'F';
  }
  return g;
}

var name = prompt('請輸入姓名：');
if (!name) {
  name = '同學';
}

// 🔹 改成 5 科
var s1 = toNumber(prompt('請輸入 國文 成績：'));
var s2 = toNumber(prompt('請輸入 英文 成績：'));
var s3 = toNumber(prompt('請輸入 數學 成績：'));
var s4 = toNumber(prompt('請輸入 自然 成績：'));
var s5 = toNumber(prompt('請輸入 社會 成績：'));

var text = '';
if (s1 === null || s2 === null || s3 === null || s4 === null || s5 === null) {
  text = '輸入有誤，請重新整理後再試。';
} else {
  // 🔹 改成 5 科平均
  var avg = (s1 + s2 + s3 + s4 + s5) / 5;

  // 🔹 檢查是否有不及格科目
  var hasFail = (s1 < 60 || s2 < 60 || s3 < 60 || s4 < 60 || s5 < 60);

  text = '姓名：' + name + '\n'
       + '國文：' + s1 + '\n'
       + '英文：' + s2 + '\n'
       + '數學：' + s3 + '\n'
       + '自然：' + s4 + '\n'
       + '社會：' + s5 + '\n'
       + '平均：' + avg.toFixed(2) + '\n'
       + '等第：' + gradeFrom(avg);

  if (hasFail) {
    text += '\n⚠️ 有不及格科目，請加油！';
  }
}

console.log(text);
document.getElementById('result').textContent = text;

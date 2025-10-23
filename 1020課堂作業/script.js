// ==========================================================
// 🌡️ 溫度轉換器（攝氏 ↔ 華氏）
// ==========================================================
function temperatureConverter() {
  let temp = parseFloat(prompt("請輸入溫度數值："));
  let unit = prompt("請輸入單位（C 或 F）：").toUpperCase();
  let result;

  if (unit === "C") {
    result = temp * 9 / 5 + 32;
    alert(`${temp}°C = ${result.toFixed(2)}°F`);
    document.getElementById("output").innerText += `攝氏 ${temp}°C = 華氏 ${result.toFixed(2)}°F\n`;
  } else if (unit === "F") {
    result = (temp - 32) * 5 / 9;
    alert(`${temp}°F = ${result.toFixed(2)}°C`);
    document.getElementById("output").innerText += `華氏 ${temp}°F = 攝氏 ${result.toFixed(2)}°C\n`;
  } else {
    alert("請輸入正確單位 C 或 F！");
  }
}

// ==========================================================
// 🎯 猜數字遊戲
// ==========================================================
function guessNumberGame() {
  let answer = Math.floor(Math.random() * 100) + 1;
  let guess;
  let count = 0;

  alert("來玩猜數字吧！範圍是 1～100");

  do {
    guess = parseInt(prompt("請輸入你的猜測："));
    count++;

    if (guess > answer) {
      alert("太大了！再小一點～");
    } else if (guess < answer) {
      alert("太小了！再大一點～");
    } else if (guess === answer) {
      alert(`恭喜答對🎉！你總共猜了 ${count} 次！`);
      document.getElementById("output").innerText += `🎯 猜中數字 ${answer}，共猜了 ${count} 次\n`;
      break;
    } else {
      alert("請輸入有效數字！");
    }
  } while (guess !== answer);
}

// ==========================================================
// 🧩 延伸練習：巢狀條件 + 多重迴圈 + 函式拆解
// ==========================================================

// 簡單多重選單：讓使用者選擇要產生的圖形
function patternMenu() {
  let choice = prompt("選擇圖形：1) 星星三角形  2) 乘法表  3) 雙層矩陣").trim();

  if (choice === "1") {
    let rows = parseInt(prompt("請輸入三角形行數："));
    drawTriangle(rows);
  } else if (choice === "2") {
    multiplicationTable();
  } else if (choice === "3") {
    matrixSum();
  } else {
    alert("請輸入 1, 2 或 3！");
  }
}

// 函式：畫星星三角形
function drawTriangle(rows) {
  let output = "";
  for (let i = 1; i <= rows; i++) {
    output += "*".repeat(i) + "\n";
  }
  alert("三角形完成！");
  document.getElementById("output").innerText += "⭐ 星星三角形：\n" + output + "\n";
}

// 函式：產生 9x9 乘法表
function multiplicationTable() {
  let table = "";
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      table += `${i}x${j}=${(i*j).toString().padEnd(2, " ")} `;
    }
    table += "\n";
  }
  alert("乘法表完成！");
  document.getElementById("output").innerText += "📘 9x9 乘法表：\n" + table + "\n";
}

// 函式：建立兩個矩陣並做加總
function matrixSum() {
  let rows = 2;
  let cols = 3;
  let A = [[1,2,3],[4,5,6]];
  let B = [[6,5,4],[3,2,1]];
  let C = [];

  for (let i = 0; i < rows; i++) {
    C[i] = [];
    for (let j = 0; j < cols; j++) {
      C[i][j] = A[i][j] + B[i][j];
    }
  }

  alert("矩陣加總完成！");
  document.getElementById("output").innerText += "🧮 矩陣相加結果：\n";
  for (let i = 0; i < rows; i++) {
    document.getElementById("output").innerText += C[i].join(" ") + "\n";
  }
}

// ==========================================================
// 主流程執行
// ==========================================================
temperatureConverter();
guessNumberGame();
patternMenu();

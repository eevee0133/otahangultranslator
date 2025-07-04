const otahangul = {
  A: 'ㅏ', B: '비', C: '시', D: '디', E: '이', F: '에프', G: '지', H: '에이치',
  I: '아이', J: '제이', K: '케이', L: '엘', M: '엠', N: '엔', O: '오', P: '피',
  Q: '큐', R: '알', S: '에스', T: '티', U: '유', V: '브이', W: '더블유',
  X: '엑스', Y: '와이', Z: '지트'
};

function translate() {
  const input = document.getElementById("inputText").value.toUpperCase();
  let output = "";

  for (let char of input) {
    if (otahangul[char]) {
      output += otahangul[char];
    } else {
      output += char;
    }
  }

  document.getElementById("outputText").innerText = output;
}

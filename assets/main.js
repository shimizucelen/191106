var title = document.getElementById('title');
console.log(title);

title.classList.add('purple');

var input = prompt('あなたの年齢は？');
var future = Number(input)+10;

title.textContent="シミズさん10年後は"+future+"歳です";
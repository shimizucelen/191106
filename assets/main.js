var title = document.getElementById('title');
console.log(title);
title.classList.add('purple');

var input = prompt('あなたの年齢は？');
var inputNum = Number(input);
var future = Number(input) + 10;
title.textContent = "KEISUKEさん10年後は" + future + "歳です！";

if(inputNum > 20){
	alert("あなたは成人ですね！！");
} else {
	var age = 20 - Number(input);
	alert(`成人まであと${age}歳です。`);
}
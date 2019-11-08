var title = document.getElementById('title');
console.log(title);
title.classList.add('purple');

var input = Number(prompt('あなたの年齢は？'));
title.textContent = "KEISUKEさん10年後は" + input+10 + "歳です！";

if(inputNum >= 20){
	alert("あなたは成人ですね！！");
} else {
	var age = 20 - Number(input);
	alert(`成人まであと${age}歳です。`);
}
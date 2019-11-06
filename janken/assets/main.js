var title = document.getElementById('title');
console.log(title);

$('[name=alphabet]').change(function () {
    // 選択されているvalue属性値を取り出す
    var val = $('[name=alphabet]').val();
    console.log(val); // 出力：ABC
    // 選択されている表示文字列を取り出す
    var txt = $('[name=alphabet] option:selected').text();
    console.log(txt); // 出力：えーびーしー
});

if (inputNum > 20) {
    alert("あなたは成人ですね！！");
} else {
    var age = 20 - Number(input);
    alert(`成人まであと${age}歳です。`);
}

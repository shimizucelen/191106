//入力
var you = Number(prompt('1：ぐー　2：ちょき　3：ぱー'));
//入力判定
if (you == 1 || you == 2 || you == 3) {
    //ランダム
    var com = Math.floor(Math.random() * 3) + 1;
    //結果
    var res = (com - you + 3) % 3;
    console.log(res);
    //出力
    //var 1 = ('ぐー');

    if (res == 0) {
        alert("あいこです");
    } else if (res == 2) {
        alert("負けです");
    } else {
        alert("勝ちです");
    }
} else {
    alert('正しい値を入力してね。');
}
//再戦
var re = Number(prompt('もう一度戦いますか？　1：はい　その他：いいえ'));
if (re == 1) {
    location.reload();
} else {
    alert('また遊ぼうね！');
}

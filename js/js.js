// 水道からのCO2を計算する。
function sCO2() {
  var s1 = document.getElementById('s-consumption');
  var scon = Number(s1.value);

  var s2 = document.getElementById('co2-s-coefficient');
  var seff = Number(s2.value);

  var s = Math.round((scon / seff)*0.8);

  document.getElementById('co2-emission-s').textContent = s.toFixed(2);
}
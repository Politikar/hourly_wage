function roundToDecimalPlace(number) {
  const factor = Math.pow(10, 1);
  var s1 = document.getElementById('s-consumption');
  var scon = Number(s1.value);
  var s2 = document.getElementById('co2-s-coefficient');
  var seff = Number(s2.value);
  var number = (scon / seff)*0.8;
  var s = Math.round(number * factor) / factor;
  document.getElementById('co2-emission-s').textContent = s.toFixed(2);
}

function sCO2() {
  var s1 = document.getElementById('s-consumption');
  var scon = Number(s1.value);

  var s2 = document.getElementById('co2-s-coefficient');
  var seff = Number(s2.value);
  var s_sub = (scon / seff)*0.8;
  var s = roundToDecimalPlace(s_sub, 1);

  document.getElementById('co2-emission-s').textContent = s.toFixed(2);
}
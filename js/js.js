function sCO2() {
  var s1 = document.getElementById('s-consumption');
  var scon = Number(s1.value);
  var s2 = document.getElementById('co2-s-coefficient');
  var seff = Number(s2.value);
  var s_sub = (scon / seff)*0.8;
  var s = Math.round(s_sub);
  document.getElementById('co2-emission-s').textContent = s.toFixed(2);
}


function roundToDecimalPlace(number) {
  var s1 = document.getElementById('s-consumption');
  var scon = Number(s1.value);
  var s2 = document.getElementById('co2-s-coefficient');
  var seff = Number(s2.value);
  var number = (scon / seff)*0.8;
  var s = Math.round(number * Math.pow(10, 1)) / Math.pow(10, 1);
  document.getElementById('emission-s').textContent = s.toFixed(2);
}
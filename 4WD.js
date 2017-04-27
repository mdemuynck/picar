var Gpio = require('onoff').Gpio;
var pins=[];
//config
  var EN_RV = new Gpio(14, 'out');
  pins.push(EN_RV);
  var IN1_RV = new Gpio(15, 'out');
  var IN2_RV = new Gpio(18, 'out');

  var EN_RA = new Gpio(25, 'out');
  var IN1_RA = new Gpio(8, 'out');
  var IN2_RA = new Gpio(7, 'out');

  var EN_LA = new Gpio(10, 'out');
  var IN1_LA = new Gpio(9, 'out');
  var IN2_LA = new Gpio(11, 'out');

  var EN_LV = new Gpio(17, 'out');
  var IN1_LV = new Gpio(27, 'out');
  var IN2_LV = new Gpio(22, 'out');

  var trigger = new Gpio(2, 'out');
  var echo = new Gpio(3, 'in');

var on = false;
var led = pins.pop();
console.print("pin: " + led);
var stdin = process.openStdin();
stdin.addListener("data", function(d) {

    on = !on;
    if (on){
       led.writeSync(1);
    }else{
       led.writeSync(0);
       led = pins.pop();
    }
    console.log("pin is on: " + on);

  });
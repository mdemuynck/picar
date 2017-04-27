var Gpio = require('onoff').Gpio;
var pins=[];
//config
  var EN_RV = new Gpio(14, 'out');
  pins.push(EN_RV);
  var IN1_RV = new Gpio(15, 'out');
  pins.push(IN1_RV);
  var IN2_RV = new Gpio(18, 'out');
  pins.push(IN2_RV);

  var EN_RA = new Gpio(25, 'out');
  pins.push(EN_RA);
  var IN1_RA = new Gpio(8, 'out');
  pins.push(IN1_RA);
  var IN2_RA = new Gpio(7, 'out');
  pins.push(IN2_RA);

  var EN_LA = new Gpio(10, 'out');
  pins.push(EN_LA);
  var IN1_LA = new Gpio(9, 'out');
  pins.push(IN1_LA);
  var IN2_LA = new Gpio(11, 'out');
  pins.push(IN2_LA);

  var EN_LV = new Gpio(17, 'out');
  pins.push(EN_LV);
  var IN1_LV = new Gpio(27, 'out');
  pins.push(IN1_LV);
  var IN2_LV = new Gpio(22, 'out');
  pins.push(IN2_LV);

  var trigger = new Gpio(2, 'out');
  pins.push(trigger);
  var echo = new Gpio(3, 'in');


var on = false;
var led = pins.pop();
console.log("pin: " + JSON.stringify(led));
var stdin = process.openStdin();
stdin.addListener("data", function(d) {

    on = !on;
    if (on){
       led.writeSync(1);
    }else{
       led.writeSync(0);
       led = pins.pop();
       console.log("pin: " + led.gpio);
    }
    console.log("pin is on: " + on);

  });
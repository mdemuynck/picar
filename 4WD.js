var Gpio = require('onoff').Gpio,
  led = new Gpio(14, 'out');

var on = true;
var stdin = process.openStdin();

led.writeSync(1);

stdin.addListener("data", function(d) {
    on = !on;
    if (on){
        led.writeSync(1);
    }else{
        led.writeSync(0)
    }
    console.log("pin is on: " + on);
  });
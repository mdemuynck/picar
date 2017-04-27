var Gpio = require('onoff').Gpio,
  led = new Gpio(14, 'out');

var on = false;
var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    on = !on;
    led.writeSync(on);
    console.log("pin is on: " + on);
  });
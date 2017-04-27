var Gpio = require('onoff').Gpio,
  led = new Gpio(14, 'out');

var on = true;
var stdin = process.openStdin();

led.writeSync(on);

stdin.addListener("data", function(d) {
    on = !on;
    led.writeSync(on);
    led.unexport();
    console.log("pin is on: " + on);
  });
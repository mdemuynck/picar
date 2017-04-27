var Gpio = require('onoff').Gpio,
  led = new Gpio(2, 'out');

var on = true;
var stdin = process.openStdin();


stdin.addListener("data", function(d) {
    if (d.indexOf("p") == -1){
        on = !on;
        if (on){
            led.writeSync(1);
        }else{
            led.writeSync(0)
        }
        console.log("pin is on: " + on);
    }else{
        var p = d.replace("p", "");
        led = new Gpio(p, 'out');
        console.log("pin set to: " + p)
    }
  });
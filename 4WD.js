var gpio = require("gpio");




var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    var pin = gpio.export(d, {
        direction: "out"
    });
    d.set(1);
    console.log("you entered: [" +
    d.toString().trim() + "]");
  });
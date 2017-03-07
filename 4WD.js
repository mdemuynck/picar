var gpio = require("gpio");
//Rechts voor
var ENRV = gpio.export(14, {
    direction: "out"
});
var IN1RV = gpio.export(15, {
    direction: "out"
});
var IN2RV = gpio.export(18, {
    direction: "out"
});
//Rechts achter
var ENRA = gpio.export(25, {
    direction: "out"
});
var IN1RA = gpio.export(8, {
    direction: "out"
});
var IN2RA = gpio.export(7, {
    direction: "out"
});
//Rechts voor
var ENLV = gpio.export(17, {
    direction: "out"
});
var IN1LV = gpio.export(27, {
    direction: "out"
});
var IN2LV = gpio.export(22, {
    direction: "out"
});
//Rechts achter
var ENLA = gpio.export(10, {
    direction: "out"
});
var IN1LA = gpio.export(9, {
    direction: "out"
});
var IN2LA = gpio.export(11, {
    direction: "out"
});
//distance sensor
var trigger = gpio.export(2, {
    direction: "out"
});
var echo = gpio.export(3, {
    direction: "out"
});

//set enables low
ENRA.set(1);
ENRV.set(1);
ENLA.set(0);
ENLV.set(0);
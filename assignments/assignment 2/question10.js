let bus = 27;

console.log(bus % 2 === 0 ? "Route A" : "Route B");
if (bus < 20) console.log("Short Route");
else if (bus <= 40) console.log("Medium Route");
else console.log("Long Route");
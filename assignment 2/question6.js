let totalSeats = 120;
let bookedSeats = 78;

let available = totalSeats - bookedSeats;
console.log("Available Seats:", available);

if (available < 20) console.log("Almost Full");
else if (available <= 60) console.log("Moderate Availability");
else console.log("Plenty of Seats Available");

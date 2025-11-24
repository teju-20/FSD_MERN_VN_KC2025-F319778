let choice = 2;

switch (choice) {
    case 1: console.log("Data Pack"); break;
    case 2: console.log("Talktime"); break;
    case 3: console.log("Validity Recharge"); break;
    default: console.log("Invalid Choice");
}
if (choice === 1) {
    console.log("You selected Data Pack");
} else if (choice === 2) {
    console.log("You selected Talktime");
} else if (choice === 3) {
    console.log("You selected Validity Recharge");
} else {
    console.log("You selected an Invalid Choice");
}
let msg = "  Great Service!  ";
console.log(msg.trim());
console.log(msg.trim().length);

if (msg.trim().startsWith("Great")) { 
    console.log("Positive Feedback");
} else {
    console.log("Neutral/Negative Feedback");
}
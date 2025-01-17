function ageCheck (age) {
    if (age > 18) {
        return true; 
    } else {
        return confirm("stay home");
    }
}
let age = prompt("How Old Are You","");
age = (+age);
if (ageCheck(age)) {
    alert("access granted");
} else {
    alert("access denied");
}

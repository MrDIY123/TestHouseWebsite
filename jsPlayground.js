function ageCheck(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("stay home");
  }
}
let age = prompt("How Old Are You", "");
age = +age;
if (ageCheck(age)) {
  alert("access granted");
} else {
  alert("access denied");
}

function priceCheck(price) {
  if (price < 100) {
    return true;
  } else {
    alert("too expensive you pesant!");
    return false;
  }
}

const priceResult = prompt("How spenny is your item?", "");

if (priceCheck(priceResult)) {
  prompt("How many items are you tryig to buy?", "");
}

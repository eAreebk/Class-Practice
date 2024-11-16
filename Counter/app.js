var num = 0;
var count = document.querySelector("#counter");
count.innerHTML = num;

function inc() {
    num++;
    count.innerHTML = num; // Update the display after incrementing
}

function dec() {
    if (num > 0) {  // Change to `num > 0` to avoid going negative
        num--;
        count.innerHTML = num; // Update the display after decrementing
    }
}

function reset() {
    num = 0;
    count.innerHTML = num; // Reset the display
}

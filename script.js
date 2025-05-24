
function checkOddEven(number) {
    if (number % 2 === 0) {
        return `${number} is Even.`;
    } else {
        return `${number} is Odd.`;
    }
}
function checkInput() {
    const input = document.getElementById("numberInput").value;
    const num = Number(input);

    const result = isNaN(num)
        ? "Please enter a valid number."
        : checkOddEven(num);

    document.getElementById("result").textContent = result;
}

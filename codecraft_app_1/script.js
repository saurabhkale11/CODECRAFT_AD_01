let display = document.getElementById("display");

let buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        let value = button.innerText;
        
        if (value === "C") {
            display.value = "";
        } else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } else {
            display.value += value;
        }
    });
});

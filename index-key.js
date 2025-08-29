let $ = document;

let titleElem = $.querySelector(".title");

const IGNORED_KEYS = [
    "Shift", "Alt", "CapsLock", "Escape", "Enter", "Tab",
    "Control", "Meta", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown",
    "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"
];

function handleAnimation(element) {
    if (element) {
        element.classList.add("hit");
        element.addEventListener("animationend", () => {
            element.classList.remove("hit");
        }, {
            once: true
        });
    }
}

$.addEventListener("keyup", function (event) {
    const key = event.key;
    const code = event.code;

    const keyElem = $.getElementById(key.toUpperCase()) || $.getElementById(code);

    handleAnimation(keyElem);

    if (key === "Backspace") {
        titleElem.innerHTML = titleElem.innerHTML.slice(0, -1);
    } else if (!IGNORED_KEYS.includes(key)) {
        titleElem.innerHTML += key;
    }

    console.log(event);

});

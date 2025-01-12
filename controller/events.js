function eventsUtilsAll(element, events, fn) {
    events.split(' ').forEach(event => {
        element.addEventListener(event, fn, false);
    });
}

function buttonEvent() {
    this.btn.forEach(button => {
        eventsUtilsAll(button, "click drag", e => {
            console.log(button.className.baseVal.replace("btn-", ""));
        });
    });

    this.btn.forEach(button => {
        eventsUtilsAll(button, "mouseover mouseup mousedown", e => {
            button.style.cursor = "pointer"; // Corrigido o erro de digitação em "cursos"
        });
    });
}

module.exports = buttonEvent;

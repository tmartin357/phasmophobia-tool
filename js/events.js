// document.getElementById("evidence-toggle").addEventListener("click", function(evt) {
//     var newState = toggleState(evt.target, "evidence");
//     toggleClasses("ghost-evidence", newState, "block");
// });

// Array.prototype.forEach.call(document.querySelectorAll("[id$=toggle]"), function(toggle) {
//     toggle.addEventListener("click", function(evt) {
//         alert("clicked")
//     });
// });

// document.getElementById("used-equipment-toggle").addEventListener("click", function(evt) {
//     var newState = toggleState(evt.target, "section");
//     toggleId("used-equipment", newState, "block");
// });

Array.prototype.forEach.call(document.getElementsByClassName("toggle"), function(toggle) {
    toggle.addEventListener("click", function(evt) {
        var textContent = evt.target.textContent;
        var substring = textContent.substr(textContent.indexOf(" ") + 1);
        var newState = toggleState(evt.target, substring);

        if(typeof evt.target.dataset.toggleId !== "undefined") {
            toggleId(evt.target.dataset.toggleId, newState, "block");
        }
        else if(typeof evt.target.dataset.toggleClass !== "undefined") {
            toggleClasses(evt.target.dataset.toggleClass, newState, "block");
        }
    });
});

document.getElementById("reset").addEventListener("click", function(evt) {
    var buttons = document.getElementsByClassName("tristate");
    var checkboxes = document.querySelectorAll("input[type=checkbox]");

    document.getElementById("ghost-name").value = "";
    document.getElementById("alone").checked = false;
    document.getElementById("everyone").checked = true;

    Array.prototype.forEach.call(buttons, function(b) {
        setState(b, states.empty);
    });

    Array.prototype.forEach.call(checkboxes, function(c) {
        c.checked = false;
    });
});

function toggleState(element, textAppend) {
    var newState = (element.dataset.state === states.yes.data ?
        states.no : states.yes);
    element.dataset.state = newState.data;
    element.textContent = (newState.data === states.yes.data ? "hide" : "show") + " " + textAppend;
    return newState;
}

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}
if (window.HTMLCollection && !HTMLCollection.prototype.forEach) {
    HTMLCollection.prototype.forEach = Array.prototype.forEach;
}

window.addEventListener("load", function () {
    const showcaseChoice = document.getElementsByClassName("showcase-choice");

    for (let i = 0; i < showcaseChoice.length; i++) {
        showcaseChoice[i].addEventListener("click", showCaseHandler);
    }

});

function showCaseHandler(event) {

    const showcaseControl = document.getElementsByClassName("showcase-control");

    const t = event.target;

    for (let i = 0; i < showcaseControl.length; i++) {
        showcaseControl[i].classList.remove("showcase-active");
        t.classList.add("showcase-active");

        if (showcaseControl[i].getAttribute("data-detail-number") === t.getAttribute("data-detail-number")) {
            showcaseControl[i].classList.add("showcase-active");
        }

    }

}

var showcaseTarget;
var showcaseImages = document.querySelectorAll('.detail-item');
let imgAttr;

//get all choice options, and create a loop
document.querySelectorAll('.showcase-control').forEach(function (item) {

    item.addEventListener('click', function () {
        showcase(item);
    });
});

function showcase(item) {

    showcaseTarget = item.getAttribute("data-detail-number");

    for (let i = 0; i < showcaseImages.length; i++) {

        let d = showcaseImages[i];
        imgAttr = d.getAttribute("data-detail-number");
        if (imgAttr == showcaseTarget) {
            d.classList.add("detail-target");
        }

        else if (imgAttr != showcaseTarget) {
            d.classList.remove("detail-target");
            item.classList.remove("showcase-active");
        }
    }
}
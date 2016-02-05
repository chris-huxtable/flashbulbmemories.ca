function focusOnImage(sender) {
	sender.parentNode.parentNode.lastElementChild.style.backgroundImage = 'url(' + sender.src + ')';
}

var elements = document.querySelectorAll(".viewer .strip img.trigger");
var count = elements.length;

for (var i = 0; i < count; i++) { elements[i].onmouseover = function() { focusOnImage(this); }; }

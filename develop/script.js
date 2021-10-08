var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");

saveButton.addEventListener("click", function(event) {
event.preventDefault();


localStorage.setItem("comment", JSON.stringify(comment));
renderMessage();

});

var lastComment = JSON.parse(localStorage.getItem("comment"));

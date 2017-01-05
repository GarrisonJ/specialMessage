(function(){
  var url = window.location.href;
  var name = url.split("?")[1];
  if (typeof name === 'undefined') {
    removeBackground();
    var exampleUrl = url + "?Steve_Smith";
    setTitle("Hi :)")
    setMessage("Add a name to the end of the url like this: <p><a href='" + exampleUrl + "'>" + exampleUrl + "</a></p>");
  } else {
    setTitle("Fuck You, " + name.replace("_", " "));
    setMessage("<p class='rainbow big_text'>Fuck You, " + name.replace("_", " ") + "</p>");
    startTextAnimation();
  }
  function startTextAnimation() {
    document.getElementById("special_message_for").classList.add("rainbow-shadow");
    var toggleMove = function() {
      document.getElementById("special_message_for").classList.toggle("move");
      setTimeout(toggleMove, 700);
    };
    toggleMove();
  }
  function setTitle(title) {
    document.title = title;
  }
  function setMessage(message) {
    document.getElementById("special_message_for").innerHTML = message;
  }
  function removeBackground() {
    document.body.style.background = 'none';
  }
})();

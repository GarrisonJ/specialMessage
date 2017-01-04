(function(){
  var url = window.location.href;
  var name = url.split("?")[1];
  if (typeof name === 'undefined') {
    removeBackground();
    var exampleUrl = url + "?Steve_Smith";
    setTitle("Hi :)")
    setMessage("Add a name to the end of the url like this: <p><a href='" + exampleUrl + "'>" + exampleUrl + "</a></p>");
  } else {
    addMarqueeFingers();
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
  function addMarqueeFingers() {
    var marquee_element = document.getElementById("marquee_fingers");
    var speeds = ["50","75","25","150"]
    var directions = ["right","left","right","left"]
    for(var i=0; i <= 3; i=i+1){
      var middleFingerEmoji = document.createElement("img");
      middleFingerEmoji.src = "middleFingerEmoji.png"
      var marquee = document.createElement("div")
      marquee.appendChild(middleFingerEmoji);
      marquee.classList.add("marquee_finger");
      marquee.style.top = (200*i) + "px";
      marquee_element.appendChild(marquee);
      console.log(marquee);
    }
  }
})();

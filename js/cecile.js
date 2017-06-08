function createBubbles() {
  var randomLeft = Math.floor(Math.random() * 100) + 1;
  var getBubbleSize = ["large", "small"];
  var rand = Math.random();
  rand *= getBubbleSize.length;
  var bubbleSize = getBubbleSize[Math.floor(rand)];
  var randomOpacity = Math.floor(Math.random() * (9 - 8 + 1)) + 8;
  var scaleValue = Math.floor(Math.random() * (9 - 5 + 1)) + 5;
  var randomScale = "scale(0." + scaleValue + ")";
  var verticalSpeed = Math.floor(Math.random() * (25 - 5 + 1)) + 5;
  var frequency = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  var randomAnimation = "moveclouds " + verticalSpeed + "s linear infinite, sideWays " + frequency + "s  ease-in-out infinite alternate";

  $("#bubbles").append('<div class="bubble ' + bubbleSize + '" style="left:' + randomLeft + '%;opacity:0.' + randomOpacity + ';transform:' + randomScale + ';-moz-transform:' + randomScale + ';-webkit-transform:' + randomScale + ';-webkit-animation:' + randomAnimation + ';-moz-animation:' + randomAnimation + ';--o-animation:' + randomAnimation + ';"></div>');
}

for (i = 0; i < 47; i++) { //create bubble every .5 seconds
  (function(i) {
    window.setTimeout(function() {
      createBubbles();
    }, i * 500);
  }(i));
}

$("#bubbles").on("click", ".large", function() {
  var bubble = $(this);
  $(this).css("transform", "scale(1.1)");
  setTimeout(function() {
    $(bubble).css("background", "url(https://s15.postimg.org/w7gkxlqx3/large_bubble_burst.png)")
    setTimeout(function() {
      $(bubble).css("opacity", "0");
    }, 50);
  }, 20);
});

$("#bubbles").on("click", ".small", function() {
  var bubble = $(this);
  $(this).css("transform", "scale(1.1)");
  setTimeout(function() {
    $(bubble).css("background", "url(https://s15.postimg.org/l5bhz5wuf/small_bubble_burst.png)")
    setTimeout(function() {
      $(bubble).css("opacity", "0");
    }, 50);
  }, 20);
});
function attachHoverListener(img_element, img_label) {
    $(img_label).css("visibility", "hidden");
    $(img_element).hover(
      function() {
        $(img_label).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, 250);
      }, function() {
        $(img_label).css({opacity: 1.0, visibility: "visible"}).animate({opacity: 0}, 250);
      }
    );
}

$(document).ready(function() {
    attachHoverListener($("#em-img"), $("#em-label"));
    attachHoverListener($("#gh-img"), $("#gh-label"));
    attachHoverListener($("#li-img"), $("#li-label"));
});
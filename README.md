# equalHeights.js

Simple jQuery script to give items an equal height. I suggest using <a href="http://www.w3schools.com/css/css3_flexbox.asp" target="_blank">CSS Flexbox</a> for equal heights rather than this, if possible.

<pre>
function equalHeight(group,breakpoint) {
  if($(window).width() >= breakpoint){
    $(group).css('min-height', 0);
    var tallest = 0;
    $(group).each(function() {
      var thisHeight = $(this).outerHeight();
      if(thisHeight > tallest) {
        tallest = thisHeight;
      }
    });
    $(group).css('min-height', tallest);
  }else{
    $(group).css('min-height', 0);
  }
}

$(document).ready(function() {
  equalHeight('.group',680);
  
  $(window).resize(function(){
    equalHeight('.group',680);
  });
});
</pre>

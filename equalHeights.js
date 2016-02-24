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

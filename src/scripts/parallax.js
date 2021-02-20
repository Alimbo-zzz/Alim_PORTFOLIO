
var parallax = (function(){
	var intro = document.querySelector('.hero__intro');


	return {
		move: function (block, windowScroll, strafeAmount){
			var strafe = windowScroll/-strafeAmount +'%';
			var transformSting = `translate3d(0, ${strafe}, 0)`;

			var style = block.style;

			style.transform = transformSting;
		},

		init: function(wScroll){
			this.move(intro, wScroll, 10);
		}

	}


}())









window.onscroll = function(){
	var wScroll = window.pageYOffset;

	parallax.init(wScroll);
}

$(document).ready(function(){
	// THIS POWERS THE STATUS BAR
	Pace.on("done", function(){
		// WHEN WE HIT 100%, FADE BLACK CURTAIN
		$('.loading-wrapper').fadeOut(500);
	});

	// LAZY LOAD THE GRAPHIC NOVEL IMAGES
	$("img.lazy").lazyload({
		threshold : 400
	});

// MAKE THE SPLASH SECTION DRAWINGS FILL
$(".imgLiquidFill").imgLiquid({
	fill: true,
	horizontalAlign: "center",
	verticalAlign: "top"
});  

// ACTIVATE STICKY BAR 
// ****** LET'S HOLD THIS FOR NOW
// var waypointsNAV = $("#chapter1").waypoint({
// 		handler: function(direction) {
// 			if (direction == "down"){
// 				$('.eastland-clock-bar-outer').addClass('active');
// 			} else {
// 				$('.eastland-clock-bar-outer').removeClass('active');
// 			}
// 		}, offset:200
// 	});

// CHANGE TEXT ON STICKY BAR
// var waypointsChapters = $(".chapter").waypoint({
// 		handler: function(direction) {
// 			if (direction == "down" || direction == "up"){
// 				console.log("going " + direction)
// 				var newTitle = this.element.innerHTML;
// 				$('.eastland-clock-bar-outer .chapter').html(newTitle);
// 			}
// 		}, offset:50
// 	});
// });
});

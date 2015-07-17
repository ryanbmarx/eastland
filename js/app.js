
$(document).ready(function(){
	Pace.on("done", function(){
		$('.loading-wrapper').fadeOut(500);
	});

// MAKE THE NEWSPAPER SECTION DRAWINGS FILL
    $(".imgLiquidFill").imgLiquid({
        fill: true,
        horizontalAlign: "center",
        verticalAlign: "top"
    });  
 
var waypointsNAV = $("#chapter1").waypoint({
		handler: function(direction) {
			if (direction == "down"){
				$('.eastland-clock-bar-outer').addClass('active');
			} else {
				$('.eastland-clock-bar-outer').removeClass('active');
			}
		}, offset:200

	});

var waypointsChapters = $(".chapter").waypoint({
		handler: function(direction) {
			if (direction == "down"){
				var newTitle = this.element.innerHTML;
				$('.eastland-clock-bar-outer .chapter').html(newTitle);
			}
		}, offset:50

	});

// LAZY LOAD
$("img.lazy").lazyload({
    threshold : 400
});
	
// var waypointsSplash = $(".splash-img-wrapper").waypoint({
// 		handler: function(direction) {
// 				console.log('fading splash');
// 				$('.fade-splash').fadeIn(2000);
// 		}, offset:200

// 	});

});


window.onload = function(e){
		setTimeout(function(){
		$('.loading-wrapper').fadeOut(500);
		
	}, 3000);
}
$(document).ready(function(){
	console.log('Eastland is ready to go');

// MAKE THE NEWSPAPER SECTION DRAWINGS FILL
    $(".imgLiquidFill").imgLiquid({
        fill: true,
        horizontalAlign: "center",
        verticalAlign: "top"
    });  
 
var waypointsNAV = $("#chapter1").waypoint({
		handler: function(direction) {
			console.log('showing sticky nav');
			if (direction == "down"){
				console.log(direction, "hello");
				$('.eastland-clock-bar-outer').addClass('active');
			} else {
				console.log(direction, "leave");
				$('.eastland-clock-bar-outer').removeClass('active');
			}
		}, offset:200

	});

var waypointsChapters = $(".chapter").waypoint({
		handler: function(direction) {
				var newTitle = this.element.innerHTML;
				console.log("New title: "+ newTitle);
				$('.eastland-clock-bar-outer .chapter').html(newTitle);
		}, offset:200

	});
	
var waypointsSplash = $(".splash-img-wrapper").waypoint({
		handler: function(direction) {
				console.log("fading red splash image");
				$('.fade-splash').fadeIn(2000);
		}, offset:200

	});

});

document.onload=function(){
	$('.loading-wrapper').fadeOut(500);

}
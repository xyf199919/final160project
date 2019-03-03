$(document).ready(function() {

	let currentImageNumber = 0;
	$("#1").hide();
	$("#2").hide();
	$("#3").hide();

	$(".tab").click(function() {
		$('#tabs-wrapper > .large-tab').removeClass("large-tab").addClass("reg-tab");
		$(this).removeClass("reg-tab").addClass("large-tab");

		$("#" + currentImageNumber).hide();
		currentImageNumber = parseInt($(this).attr("class"), 10);
		$("#" + currentImageNumber).show();
	})

});

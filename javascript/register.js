$(document).ready(function() {

	$(".form-submit").click(function() {

		var name = $("#new-name").val();
		var username = $("#new-username").val();
		var password = $("#new-password").val();

		if ("create" == $(this).attr("id")) {
			var group_name = Math.floor((Math.random() * 99999) + 1);

			var ref = firebase.database().ref();
			root.push({
				group_name : {
					username : {
						"name" : name,
						"password" : password
					}
				}
			})


			document.location.href = dashboard.html;
		} else {
			document.location.href = join.html;
		}


	}

}


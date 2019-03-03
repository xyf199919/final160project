$(document).ready(function() {

	$(".form-submit").click(function() {

		var name = $("#new-name").val();
		var username = $("#new-username").val();
		var password = $("#new-password").val();

		alert("ok");

		if ($(this).attr("id") == "create") {
			var group_name = Math.floor((Math.random() * 99999) + 1);

			var ref = firebase.database().ref();
			var info = {
				group_name : {
					username : {
						"name" : name,
						"password" : password
					}
				}
			}
			ref.push(info);
			window.alert(info);

			document.location.href = dashboard.html;
		} else {
			document.location.href = join.html;
		}
	}

	function joingroup(){

		window.alert("ok");

	  var ref = firebase.database().ref();

	  ref.once("value")
	  .then(function(snapshot) {

	    //
	    var path = group_name + "/";
	    window.alert(path);
	    var c = snapshot.child(path).exists();
	    if (c) {
					var ref = firebase.database().ref();
					root.push({
						group_name : {
							username : {
								"name" : name,
								"password" : password
							}
						}
					});
	      document.location.href = "dashboard.html";
	    } else {
				window.alert("groupname doesn't exit, please try again")
			}
	  });

	}

}

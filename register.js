function creategroup() {

	regname = document.getElementById("regname").value;
	regusername = document.getElementById("regusername").value;
	regpassword = document.getElementById("regpassword").value;

	groupname = Math.floor((Math.random() * 99999) + 1);

	var ref = firebase.database().ref();

	ref.child(groupname).child(regname).child("name").set(regname);
	ref.child(groupname).child(regname).child("password").set(regpassword);

	document.location.href = "dashboard.html";

}

function joingroup(){
	regname = document.getElementById("regname").value;
	regusername = document.getElementById("regusername").value;
	regpassword = document.getElementById("regpassword").value;

	var joingroupname = document.getElementById("joingroupname").value;
	var ref = firebase.database().ref();

  ref.once("value")
  .then(function(snapshot) {

    var c = snapshot.child(joingroupname).exists();
    if (c) {
				groupname = joingroupname;
				ref.child(groupname).child(regname).child("name").set(regname);
				ref.child(groupname).child(regname).child("password").set(regpassword);

				document.location.href = "dashboard.html";
    } else {
				window.alert("groupname doesn't exist, please try again");
		}
  });
}

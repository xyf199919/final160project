function creategroup() {

	window.alert("ok");
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

function login() {
  var ref = firebase.database().ref();

  ref.once("value")
  .then(function(snapshot) {

    regusername = document.getElementById("loginusername").value;
    regpassword = document.getElementById("loginpassword").value;
    reggroupname = document.getElementById("logingroupname").value;


    var path =  reggroupname + "/" + regusername;
    var c = snapshot.child(path).exists();
    if (c) {
      var user = snapshot.child(path).val();
        if (user.password === regpassword) {
          document.location.href = "dashboard.html";
        }

    }
  });

}

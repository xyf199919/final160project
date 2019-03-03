
function creategroup() {


	regname = document.getElementById("regname").value;
	regusername = document.getElementById("regusername").value;
	regpassword = document.getElementById("regpassword").value;

	groupname = Math.floor((Math.random() * 99999) + 1);
	window.alert(groupname);

	var ref = firebase.database().ref();

	ref.child(groupname).child(regname).child("name").set(regname);
	ref.child(groupname).child(regname).child("password").set(regpassword);

	document.location.href = "dashboard.html";

}

function joingroup(){
	regname = document.getElementById("regname").value;
	regusername = document.getElementById("regusername").value;
	regpassword = document.getElementById("regpassword").value;

	localStorage.setItem("username",regusername);

	var joingroupname = document.getElementById("joingroupname").value;
	var ref = firebase.database().ref();

  ref.once("value")
  .then(function(snapshot) {

    var c = snapshot.child(joingroupname).exists();
    if (c) {
				groupname = joingroupname;
				localStorage.setItem("groupname",groupname);
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
    groupname = document.getElementById("logingroupname").value;


    var path = groupname + "/" + regusername;
    var c = snapshot.child(path).exists();
    if (c) {
      var user = snapshot.child(path).val();
        if (user.password === regpassword) {
          document.location.href = "dashboard.html";
        }
    }
  });

}

function addevent(){

  window.alert("addingevent");

	var groupname = localStorage.getItem("groupname");
	var username = localStorage.getItem("username");
	window.alert(groupname);

  var ref = firebase.database().ref();
  var postsRef = ref.child(groupname).child(username).child("events");
  var eventname = document.getElementById("eventname").value;
  var eventloc = document.getElementById("eventlocation").value;
  var eventdate = document.getElementById("eventdate").value;
  var eventstart = document.getElementById("eventstart").value;
  var eventend = document.getElementById("eventend").value;
  var newPostRef = postsRef.push({
    classname: eventname,
    date: eventdate,
    starttime: eventstart,
    endtime: eventend,
    location: eventloc
  });
  var eventid = newPostRef.key;
  window.alert(eventid);

  var modal = document.getElementById('myModal');
  modal.style.display = "none";
}

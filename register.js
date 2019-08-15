
function register() {
	regusername = document.getElementById("regusername").value;
	regpassword = document.getElementById("regpassword").value;

	regrelativename = document.getElementById("regrelativename").value;
	regbirthdate = document.getElementById("regbirthdate").value;

	ref.child(regusername).child("password").set(regpassword);
	ref.child(regusername).child("birthdate").set(regbirthdate);
	ref.child(regusername).child("relativename").set(regrelativename);

	localStorage.setItem("username", regusername);
	document.location.href = "editTimeline.html";
}

function login() {

  ref.once("value")
  .then(function(snapshot) {

    regusername = document.getElementById("loginusername").value;
    regpassword = document.getElementById("loginpassword").value;

    var path = regusername;
    var c = snapshot.child(path).exists();
    if (c) {
      var user = snapshot.child(path).val();
        if (user.password === regpassword) {
					localStorage.setItem("username",regusername);
          document.location.href = "editTimeline.html";
        }
    }
  });
}



function getevents(username, callback) {
	var username = localStorage.getItem("username");;
	var dates = [];
	var titles =[];
	var descriptions = [];
	var ids = [];
	var numevents = 0;
	var userref = firebase.database().ref(username);

	userref.once("value")
	.then(function(snapshot) {

		var c = snapshot.child("events").exists();
		if (c) {
				var eventsRef = snapshot.child("events");

				eventsRef.forEach(function(childSnapshot) {
					let id = childSnapshot.key;
					// var childData = childSnapshot.val();
					let title = childSnapshot.child("title").val();
					let description = childSnapshot.child("body").val();
					let date = childSnapshot.child("date").val();

					dates.push(date);
					titles.push(title);
					descriptions.push(description);
					ids.push(id);
					numevents += 1;
				});
		} else {
				window.alert("there are no events currently");
		}
	});
	//sorting dates
	setTimeout(function(){
		var indices = new Array(numevents);
		for (var i = 0; i < numevents; ++i) indices[i] = i;
		indices.sort(function (a, b) { return dates[a] < dates[b] ? -1 : dates[a] > dates[b] ? 1 : 0; });
		console.log(indices);

		var dates_sorted = [];
		var titles_sorted = [];
		var descriptions_sorted = [];
		var ids_sorted = []

		setTimeout(function() {
			for (i = 0; i < numevents; i++) {
				dates_sorted[i] = dates[indices[i]];
				titles_sorted[i] = titles[indices[i]];
				descriptions_sorted[i] = descriptions[indices[i]];
				ids_sorted[i] = ids[indices[i]];
			}
			// console.log(dates_sorted);
			// console.log(titles_sorted);
			// console.log(descriptions_sorted);
			// console.log(ids_sorted);
			let listofevents = [dates_sorted, titles_sorted, descriptions_sorted, ids_sorted];
			console.log(listofevents);
			callback(listofevents);

			return listofevents;
		}, 500)
	}, 500)
}

//assumes date is a number
function editevent(username, id, date, title, body) {
	var userref = firebase.database().ref().child(username);

	userref.once("value")
  .then(function(snapshot) {

    var c = snapshot.child("events").child(id).exists();
    if (c) {
				ref.child(username).child("events").child(id).set({
					date: date,
					title: title,
					body: body
				});
    } else {
				window.alert("id doesn't exist");
		}
  });
}

function addevent(username, date, title, body){
	//TODO
  var ref = firebase.database().ref();
  var eventsRef = ref.child(username).child("events");

  var newEventsRef = eventsRef.push();
	newEventsRef.set({
    date: date,
		title: title,
		body: body
  });
  var eventid = newEventsRef.key;
}

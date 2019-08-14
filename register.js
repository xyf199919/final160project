
function register() {
	regusername = document.getElementById("regusername").value;
	regpassword = document.getElementById("regpassword").value;

	regrelativename = document.getElementById("regrelativename").value;
	regbirthdate = document.getElementById("regbirthdate").value;

	ref.child(regusername).child("password").set(regpassword);
	ref.child(regusername).child("birthdate").set(regbirthdate);
	ref.child(regusername).child("relativename").set(regrelativename);

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
//updated event with id format
function getevents(username) {
	var username = 'asdf';
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
				window.alert("username event doesn't exist, please try again");
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

			return listofevents;
		}, 500)
	}, 500)
}

//assumes date is a number
function editevent(id, date, title, body) {
	var username = 'asdf';
	var userref = firebase.database().ref(username);

	userref.once("value")
  .then(function(snapshot) {

    var c = snapshot.child('events/' + id).exists();
    if (c) {
				var eventRef = snapshot.child('events/' + id);
				eventRef.child('title').set(title);
				eventRef.child('body').set(body);
				eventRef.child('date').set(date);
    } else {
				window.alert("so such id");
		}
  });
}

function addevent(date, title, body){
	//TODO
	var username = 'asdf';

  var ref = firebase.database().ref();
  var eventsRef = ref.child(username).child("events");

  var newEventsRef = eventsRef.push({
    date: date,
		title: title,
		body: body
  });
  var eventid = newEventsRef.key;
  window.alert(eventid);
}

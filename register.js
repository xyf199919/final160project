

function creategroup() {

	// regname = document.getElementById("regname").value;
	// regusername = document.getElementById("regusername").value;
	// regpassword = document.getElementById("regpassword").value;
	//
	//
	// groupname = Math.floor((Math.random() * 99999) + 1);

	var ref = firebase.database().ref();

	ref.child("12234").set("Asdfa");
	//
	// ref.set ({
	// 	groupname : {
 	// 	 regusername : {
 	// 		 "name" : regname,
 	// 		 "password" : regpassword
 	// 	 }
 	//  	}
	// });

	document.location.href = "dashboard.html";

}
//
// function preparejoin(){
//
// 	regname = document.getElementById("regname").value;
// 	regusername = document.getElementById("regusername").value;
// 	regpassword = document.getElementById("regpassword").value;
//
// 	window.alert(regname);
// 	document.location.href = "join.html";
// }
//
// function joingroup(){
//
// 	var joingroupname = document.getElementById("joingroupname").value;
//
// 	window.alert(regname);
//
//   ref.once("value")
//   .then(function(snapshot) {
//
//     var c = snapshot.child(joingroupname).exists();
// 		window.alert(c);
//     if (c) {
// 				var ref = firebase.database().ref();
// 				groupname = joingroupname;
// 				var info = {
// 					groupname : {
// 						regusername : {
// 							"name" : regname,
// 							"password" : regpassword
// 						}
// 					}
// 				}
// 				ref.push(info);
// 				window.alert(info);
// 				document.location.href = "dashboard.html";
//     } else {
// 				window.alert("groupname doesn't exit, please try again");
// 		}
//   });
//
// }

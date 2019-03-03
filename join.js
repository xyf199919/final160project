function login(){

  var ref = firebase.database().ref();

  ref.once("value")
  .then(function(snapshot) {

    var username = document.getElementById("newusername").value;
    var password = document.getElementById("newpassword").value;
    var groupname = document.getElementById("joingroupcode").value;

    //
    var path = joingroupcode + "/" + newusername;
    window.alert(path);
    var c = snapshot.child(path).exists();
    if (c) {
        document.location.href = "dashboard.html";

    }

    // ...
  });

}

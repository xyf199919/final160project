function login() {
  var ref = firebase.database().ref();

  ref.once("value")
  .then(function(snapshot) {

    var username = document.getElementById("loginusername").value;
    var password = document.getElementById("loginpassword").value;
    var groupname = document.getElementById("logingroupname").value;


    var path =  groupname + "/" + username;
    var c = snapshot.child(path).exists();
    if (c) {
      var user = snapshot.child(path).val();
        if (user.password === password) {
          document.location.href = "dashboard.html";
        }

    }
  });

}

function addevent(){

  window.alert("ol");

  // var modal = document.getElementById('myModal');
  // modal.style.display = "none";

  var ref = firebase.database().ref();
  var postsRef = ref.child("12345").child("xyf199919").child("events");
  var eventname = document.getElementById("eventname").value;
  var eventloc = document.getElementById("eventlocation").value;
  window.alert(eventloc);
  var eventdate = document.getElementById("eventdate").value;
  window.alert(eventdate);
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

  // ref.child("12345").child("xyf199919").child("events").child(eventid).child("starttime").set(eventstart);
  // ref.child("12345").child("xyf199919").child("events").child(eventid).child("endtime").set(eventend);
  // ref.child("12345").child("xyf199919").child("events").child(eventid).child("date").set(eventdate);
  // ref.child("12345").child("xyf199919").child("events").child(eventid).child("location").set(eventloc);
  // ref.child("12345").child("xyf199919").child("events").child(eventid).child("classname").set(eventname);

  // ref.once("value")
  // .then(function(snapshot) {
  //
  //   //
  //   var path = joingroupcode + "/" + newusername;
  //   window.alert(path);
  //   var c = snapshot.child(path).exists();
  //   if (c) {
  //       document.location.href = "dashboard.html";
  //
  //   }
  //
  //   // ...
  // });

}

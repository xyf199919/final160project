function addevent(){

  var ref = firebase.database().ref();
  var postsRef = ref.child("12345").child("xyf199919").child(events);
  var eventname = document.getElementById("eventname").value;
  var eventloc = document.getElementById("eventloc").value;
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

  //ref.child(groupname).child(username).child(events).set(eventid);
  ref.child("12345").child("xyf199919").child(events).child(eventid).set(eventname);
  ref.child("12345").child("xyf199919").child(events).child(eventid).set(eventdate);
  ref.child("12345").child("xyf199919").child(events).child(eventid).set(eventstart);
  ref.child("12345").child("xyf199919").child(events).child(eventid).set(eventloc);
  ref.child("12345").child("xyf199919").child(events).child(eventid).set(eventstart);

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
